"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowUpRight,
  CloudRain,
  Hammer,
  PoundSterling,
  Calendar,
} from "lucide-react";

// --------------------
// Supabase Client
// --------------------
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // --------------------
  // Fetch upcoming bookings
  // --------------------
  useEffect(() => {
    const fetchDashboardData = async () => {
      const { data } = await supabase
        .from("bookings")
        .select("*")
        .order("start_date", { ascending: true })
        .gte("end_date", new Date().toISOString())
        .limit(5);

      if (data) setBookings(data);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  // --------------------
  // Manual Sync Button
  // --------------------
  const handleSync = async () => {
    const btn = document.getElementById("sync-btn");
    if (btn) btn.innerText = "Syncing...";
    await fetch("/api/sync");
    window.location.reload();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* ================= Header ================= */}
      <header className="flex justify-between items-end mb-10">
        <div>
          <p className="text-stone-500 text-sm font-medium mb-1">
            Saturday, 27 Dec 2025
          </p>
          <h2 className="text-3xl font-serif text-emerald-950">
            Good morning, Steward.
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm">
            <CloudRain className="w-5 h-5 text-stone-400" />
            <span className="text-sm font-medium text-stone-600">
              Beddgelert: Light Rain, 8°C
            </span>
          </div>

          {/* Sync Button */}
          <button
            id="sync-btn"
            onClick={handleSync}
            className="bg-emerald-900 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-800 transition-colors shadow-sm"
          >
            ↻ Sync Airbnb
          </button>
        </div>
      </header>

      {/* ================= Stats ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Roof Fund"
          value="£12,450"
          subtext="of £50,000 Goal"
          icon={<Hammer className="w-5 h-5 text-amber-600" />}
          trend="+£450 this week"
          progress={25}
        />
        <StatCard
          title="Pending Enquiries"
          value={loading ? "…" : bookings.length.toString()}
          subtext="Upcoming bookings"
          icon={<MailIcon className="w-5 h-5 text-emerald-600" />}
          actionLabel="View Ledger"
        />
        <StatCard
          title="Next Check-in"
          value={
            bookings[0]
              ? new Date(bookings[0].start_date).toLocaleDateString()
              : "—"
          }
          subtext={
            bookings[0]
              ? bookings[0].guest_name
              : "No arrivals scheduled"
          }
          icon={<Calendar className="w-5 h-5 text-emerald-800" />}
          actionLabel="View Booking"
        />
      </div>

      {/* ================= Main Grid ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ===== Left: Bookings Ledger ===== */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-xl text-emerald-900">
              Upcoming Arrivals
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-stone-400">
                Loading ledger...
              </div>
            ) : (
              bookings.map((booking) => (
                <EnquiryRow
                  key={booking.id}
                  name={booking.guest_name}
                  date="Synced"
                  type={
                    booking.source === "airbnb"
                      ? "Airbnb Booking"
                      : "Direct"
                  }
                  guests="-"
                  dates={`${new Date(
                    booking.start_date
                  ).toLocaleDateString()} - ${new Date(
                    booking.end_date
                  ).toLocaleDateString()}`}
                  status={
                    booking.status === "confirmed" ? "Booked" : "New"
                  }
                />
              ))
            )}

            {!loading && bookings.length === 0 && (
              <div className="p-8 text-center text-stone-500">
                No upcoming bookings found. Try syncing!
              </div>
            )}
          </div>
        </div>

        {/* ===== Right: Guardians ===== */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-xl text-emerald-900">
              New Guardians
            </h3>
            <button className="text-sm text-emerald-700 font-medium hover:underline">
              Manage
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="space-y-6">
              <DonorRow
                name="James K."
                amount="£50"
                item="Slate"
                time="1h ago"
              />
              <DonorRow
                name="The Wilson Family"
                amount="£150"
                item="Oak Tree"
                time="5h ago"
              />
              <DonorRow
                name="Class of 1994"
                amount="£500"
                item="Founding Member"
                time="1d ago"
              />
            </div>

            <button className="w-full mt-6 py-3 border border-dashed border-emerald-300 rounded-lg text-emerald-700 text-sm font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">+</span> Add Offline Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= Micro Components =================

function StatCard({
  title,
  value,
  subtext,
  icon,
  trend,
  progress,
  actionLabel,
}: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-stone-50 rounded-lg">{icon}</div>
          {actionLabel && (
            <button className="text-xs font-bold text-emerald-700 uppercase tracking-wide hover:text-emerald-900 flex items-center gap-1">
              {actionLabel} <ArrowUpRight className="w-3 h-3" />
            </button>
          )}
        </div>
        <h3 className="text-stone-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-serif text-emerald-950 mb-1">
          {value}
        </p>
        <p className="text-xs text-stone-400">{subtext}</p>
      </div>

      {progress !== undefined && (
        <div className="mt-6">
          <div className="flex justify-between text-xs mb-2">
            <span className="font-bold text-emerald-700">
              {progress}%
            </span>
            {trend && (
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {trend}
              </span>
            )}
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function EnquiryRow({ name, date, type, guests, dates, status }: any) {
  const statusStyles: Record<string, string> = {
    New: "bg-amber-100 text-amber-800 border-amber-200",
    Replied: "bg-stone-100 text-stone-600 border-stone-200",
    Booked: "bg-emerald-100 text-emerald-800 border-emerald-200",
  };

  return (
    <div className="p-5 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center font-serif text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-medium text-emerald-950 group-hover:text-emerald-700 transition-colors">
              {name}
            </h4>
            <p className="text-sm text-stone-500">
              {type} · {guests} guests
            </p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <div className="mt-3 pl-14 flex items-center gap-6 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {dates}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function DonorRow({ name, amount, item, time }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
          <PoundSterling className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-emerald-900">
            {name}
          </p>
          <p className="text-xs text-stone-500">{item}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-emerald-700">
          {amount}
        </p>
        <p className="text-[10px] text-stone-400">{time}</p>
      </div>
    </div>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
