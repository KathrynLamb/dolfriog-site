

"use client";

import React, { useMemo, useState } from "react";
import {
  Calendar,
  Users,
  Check,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Property = {
  id: "hall" | "tiny" | "camping";
  name: string;
  type: string;
  sleeps: string;
  priceLabel: string;
  image: string; // local path in /public
  features: string[];
  color: "emerald" | "amber" | "green";
};

type SelectingDate = "checkIn" | "checkOut";

export default function DolfriogBooking() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const [guests, setGuests] = useState<number>(2);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectingDate, setSelectingDate] = useState<SelectingDate>("checkIn");

  // ✅ Use LOCAL images so nothing breaks:
  // Put these files in /public:
  // /public/hall.jpg
  // /public/tiny_house.jpg
  // /public/camping.jpg
  const properties: Property[] = useMemo(
    () => [
      {
        id: "hall",
        name: "Dolfriog Hall",
        type: "Historic Manor House",
        sleeps: "1–20 guests",
        priceLabel: "From £800 / night",
        image: "full_house.png",
        features: [
          "Full estate access",
          "Original Victorian features",
          "Modern kitchen",
          "Multiple bedrooms",
          "Perfect for groups",
        ],
        color: "emerald",
      },
      {
        id: "tiny",
        name: "Spindrift Tiny House",
        type: "Boutique Glamping",
        sleeps: "2 guests",
        priceLabel: "From £120 / night",
        image: "/tiny_house.png",
        features: [
          "Complete privacy",
          "Riverside location",
          "Pet-friendly",
          "Kitchen included",
          "Romantic retreat",
        ],
        color: "amber",
      },
      {
        id: "camping",
        name: "Wild Camping Pitch",
        type: "Wilderness Adventure",
        sleeps: "1–4 guests per pitch",
        priceLabel: "From £25 / night",
        image: "/glamping.png",
        features: [
          "Ancient forest setting",
          "Composting toilets",
          "Fresh mountain water",
          "Basic facilities",
          "True wild experience",
        ],
        color: "green",
      },
    ],
    []
  );

  const todayISO = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

  const monthNames = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const getCurrentMonth = () => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  };

  const [currentMonth, setCurrentMonth] = useState<{ month: number; year: number }>(
    getCurrentMonth()
  );

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isPast = (iso: string) => iso < todayISO;

  const handleDateClick = (iso: string) => {
    if (isPast(iso)) return;

    if (selectingDate === "checkIn") {
      setCheckIn(iso);
      setCheckOut(""); // reset checkout when changing checkin
      setSelectingDate("checkOut");
    } else {
      // only allow checkout after checkin
      if (checkIn && iso > checkIn) {
        setCheckOut(iso);
        setShowCalendar(false);
        setSelectingDate("checkIn");
      }
    }
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.month === 11 ? 0 : prev.month + 1;
      const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
      return { month: newMonth, year: newYear };
    });
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.month === 0 ? 11 : prev.month - 1;
      const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
      return { month: newMonth, year: newYear };
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth.month, currentMonth.year);
    const firstDay = getFirstDayOfMonth(currentMonth.month, currentMonth.year);
    const days: React.ReactNode[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const iso = formatDate(currentMonth.year, currentMonth.month, day);

      const isSelected = iso === checkIn || iso === checkOut;
      const isInRange = Boolean(checkIn && checkOut && iso > checkIn && iso < checkOut);
      const disabled = isPast(iso) || (selectingDate === "checkOut" && Boolean(checkIn) && iso <= checkIn);

      days.push(
        <button
          key={iso}
          type="button"
          disabled={disabled}
          onClick={() => handleDateClick(iso)}
          className={[
            "h-10 rounded-lg flex items-center justify-center transition-all text-sm",
            disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-stone-100 text-gray-700",
            isInRange ? "bg-emerald-100 text-emerald-900" : "",
            isSelected ? "bg-emerald-700 text-white font-semibold hover:bg-emerald-700" : "",
          ].join(" ")}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-xl p-6 absolute top-full left-0 mt-2 z-50 w-80">
        <div className="flex justify-between items-center mb-4">
          <button type="button" onClick={prevMonth} className="p-2 hover:bg-stone-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="font-semibold text-lg">
            {monthNames[currentMonth.month]} {currentMonth.year}
          </h3>
          <button type="button" onClick={nextMonth} className="p-2 hover:bg-stone-100 rounded-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-gray-500">
          <div className="text-center">S</div>
          <div className="text-center">M</div>
          <div className="text-center">T</div>
          <div className="text-center">W</div>
          <div className="text-center">T</div>
          <div className="text-center">F</div>
          <div className="text-center">S</div>
        </div>

        <div className="grid grid-cols-7 gap-1">{days}</div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          {selectingDate === "checkIn" ? "Select check-in date" : "Select check-out date"}
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    if (!selectedProperty) return;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in all required fields");
      return;
    }
    if (!checkIn || !checkOut) {
      alert("Please select dates");
      return;
    }

    // Replace this with API call later
    alert("Enquiry submitted! We'll be in touch within 24 hours to confirm.");
  };

  const badgeClass = (color: Property["color"]) => {
    if (color === "emerald") return "bg-emerald-600";
    if (color === "amber") return "bg-amber-600";
    return "bg-green-600";
  };

  const buttonClass = (color: Property["color"]) => {
    if (color === "emerald") return "bg-emerald-700 hover:bg-emerald-800";
    if (color === "amber") return "bg-amber-600 hover:bg-amber-700";
    return "bg-green-700 hover:bg-green-800";
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl sm:text-3xl font-serif text-emerald-800">
            Dolfriog Hall
          </a>
          <a href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-emerald-700" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? "bg-emerald-700 text-white" : "bg-gray-200"}`}>
                1
              </div>
              <span className="hidden sm:inline font-medium">Property</span>
            </div>

            <div className={`w-12 h-0.5 ${step >= 2 ? "bg-emerald-700" : "bg-gray-300"}`} />

            <div className={`flex items-center gap-2 ${step >= 2 ? "text-emerald-700" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? "bg-emerald-700 text-white" : "bg-gray-200"}`}>
                2
              </div>
              <span className="hidden sm:inline font-medium">Dates</span>
            </div>

            <div className={`w-12 h-0.5 ${step >= 3 ? "bg-emerald-700" : "bg-gray-300"}`} />

            <div className={`flex items-center gap-2 ${step >= 3 ? "text-emerald-700" : "text-gray-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 3 ? "bg-emerald-700 text-white" : "bg-gray-200"}`}>
                3
              </div>
              <span className="hidden sm:inline font-medium">Details</span>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-3">Choose Your Stay</h1>
              <p className="text-gray-600 text-lg">Select the perfect accommodation for your Welsh adventure</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {properties.map((property) => (
                <div
                  key={property.id}
                  onClick={() => {
                    setSelectedProperty(property);
                    setStep(2);
                  }}
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02] ${
                    selectedProperty?.id === property.id ? "ring-4 ring-emerald-500" : ""
                  }`}
                >
                  <div className="relative h-48">
                    <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                    <div className={`absolute top-4 right-4 ${badgeClass(property.color)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {property.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-emerald-900 mb-2">{property.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{property.sleeps}</p>
                    <p className="text-2xl font-bold text-emerald-700 mb-4">{property.priceLabel}</p>

                    <ul className="space-y-2 mb-4">
                      {property.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className={`w-full ${buttonClass(property.color)} text-white py-3 rounded-lg font-medium transition-colors`}
                    >
                      Select This Stay
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Tip: Use your real photos by saving them in <code className="px-1 py-0.5 bg-stone-200 rounded">/public</code> and matching the filenames above.
            </p>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && selectedProperty && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-3">When Will You Visit?</h1>
              <p className="text-gray-600 text-lg">Choose your dates for {selectedProperty.name}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <img src={selectedProperty.image} alt={selectedProperty.name} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="text-xl font-serif text-emerald-900">{selectedProperty.name}</h3>
                  <p className="text-gray-600 text-sm">{selectedProperty.sleeps}</p>
                  <p className="text-emerald-700 font-semibold">{selectedProperty.priceLabel}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                  <div
                    onClick={() => {
                      setShowCalendar(true);
                      setSelectingDate("checkIn");
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className={checkIn ? "text-gray-900" : "text-gray-400"}>
                      {checkIn ? new Date(checkIn).toLocaleDateString("en-GB") : "Select date"}
                    </span>
                  </div>
                  {showCalendar && selectingDate === "checkIn" && renderCalendar()}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                  <div
                    onClick={() => {
                      setShowCalendar(true);
                      setSelectingDate("checkOut");
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className={checkOut ? "text-gray-900" : "text-gray-400"}>
                      {checkOut ? new Date(checkOut).toLocaleDateString("en-GB") : "Select date"}
                    </span>
                  </div>
                  {showCalendar && selectingDate === "checkOut" && renderCalendar()}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    -
                  </button>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-2xl font-semibold text-gray-900">{guests}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  (We’ll confirm suitability for your group size when we reply.)
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={() => (checkIn && checkOut ? setStep(3) : alert("Please select both dates"))}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && selectedProperty && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-3">Almost There!</h1>
              <p className="text-gray-600 text-lg">Enter your details and we’ll confirm by email</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Summary */}
              <div className="bg-stone-50 rounded-lg p-6 mb-8">
                <h3 className="font-serif text-xl text-emerald-900 mb-4">Your Enquiry Summary</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Stay:</span>
                    <span className="font-semibold">{selectedProperty.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span className="font-semibold">{new Date(checkIn).toLocaleDateString("en-GB")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span className="font-semibold">{new Date(checkOut).toLocaleDateString("en-GB")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span className="font-semibold">{guests}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300 mt-2">
                    <span className="font-semibold">Guide price:</span>
                    <span className="text-emerald-700 font-bold">{selectedProperty.priceLabel}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    placeholder="Any special requirements, questions, celebrations, dogs, accessibility needs?"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                  <strong>Note:</strong> This is an enquiry. We’ll reply within 24 hours with confirmation and next steps.
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-300 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-serif text-white mb-2">Dolfriog Hall</h2>
          <p className="text-sm">Llanfrothen, Snowdonia • +44 1766 XXX XXX • stay@dolfriog.wales</p>
        </div>
      </footer>
    </div>
  );
}

