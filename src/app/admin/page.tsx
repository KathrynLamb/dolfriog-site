"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
// ✅ Added useClerk for custom logout
import { UserButton, useUser, useClerk } from "@clerk/nextjs"; 
import {
  ArrowUpRight,
  CloudRain,
  Hammer,
  PoundSterling,
  Calendar,
  Loader2,
  RefreshCcw,
  LogOut, // ✅ Added LogOut Icon
} from "lucide-react";
import { useRouter } from "next/navigation";

// --------------------
// Supabase Client
// --------------------
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk(); // ✅ Hook to handle sign out programmatically
  
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const router = useRouter(); // ✅ Init Router
  
  // --------------------
  // Fetch upcoming bookings
  // --------------------
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        console.warn("Supabase keys missing");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("start_date", { ascending: true })
        .gte("end_date", new Date().toISOString())
        .limit(5);

      if (data) setBookings(data);
      if (error) console.error("Supabase error:", error);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  // --------------------
  // Manual Sync Button
  // --------------------
  const handleSync = async () => {
    setSyncing(true);
    try {
      const res = await fetch("/api/sync", { method: "POST" });
      console.log("Sync", res)
      if (res.ok) window.location.reload();
      else console.error("Sync failed");
    } catch (e) {
      console.error(e);
    } finally {
      setSyncing(false);
    }
  };

  const handleSignOut = async () => {
    console.log("IN SIGN OUTR")

    // ✅ Force redirect after sign out
    await signOut(() => router.push("/"));
  };

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-stone-50/50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= Header ================= */}
        <header className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
          <div>
            <p className="text-stone-500 text-sm font-medium mb-1 uppercase tracking-wider">
              {today}
            </p>
            <h2 className="text-3xl font-serif text-emerald-950">
              Good morning, {isLoaded ? user?.firstName || "Steward" : "..."}.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden md:flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm text-sm text-stone-600">
              <CloudRain className="w-5 h-5 text-stone-400" />
              <span>Beddgelert: Light Rain, 8°C</span>
            </div>

            {/* Sync Button */}
            <button
              onClick={handleSync}
              disabled={syncing}
              className="flex items-center gap-2 bg-emerald-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all shadow-sm disabled:opacity-70"
            >
              {syncing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCcw className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">Sync</span>
            </button>

            {/* ✅ Explicit Log Out Button */}
            <button
           type="button" // ✅ Prevent accidental form submit
           onClick={handleSignOut}
              className="flex items-center gap-2 bg-white text-red-600 border border-stone-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50 hover:border-red-200 transition-all shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>

            {/* Clerk Avatar (also has logout in menu) */}
            <div className="bg-white p-1 rounded-full border border-stone-200 shadow-sm">
              <UserButton afterSignOutUrl="/" />
            </div>
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
                ? new Date(bookings[0].start_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })
                : "—"
            }
            subtext={bookings[0] ? bookings[0].guest_name : "No arrivals scheduled"}
            icon={<Calendar className="w-5 h-5 text-emerald-800" />}
            actionLabel="View Booking"
          />
        </div>

        {/* ================= Main Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ... (Rest of the grid code remains exactly the same) ... */}
          {/* ===== Left: Bookings Ledger ===== */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl text-emerald-900">
                Upcoming Arrivals
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              {loading ? (
                <div className="p-12 text-center text-stone-400 flex flex-col items-center">
                  <Loader2 className="w-6 h-6 animate-spin mb-2" />
                  Loading ledger...
                </div>
              ) : (
                bookings.map((booking) => (
                  <EnquiryRow
                    key={booking.id}
                    name={booking.guest_name}
                    date="Synced"
                    type={booking.source === "airbnb" ? "Airbnb Booking" : "Direct"}
                    guests={booking.guests || "-"}
                    dates={`${new Date(booking.start_date).toLocaleDateString(
                      "en-GB"
                    )} - ${new Date(booking.end_date).toLocaleDateString(
                      "en-GB"
                    )}`}
                    status={booking.status === "confirmed" ? "Booked" : "New"}
                  />
                ))
              )}

              {!loading && bookings.length === 0 && (
                <div className="p-12 text-center">
                  <p className="text-stone-500 mb-2">No upcoming bookings found.</p>
                  <button
                    onClick={handleSync}
                    className="text-emerald-700 text-sm font-medium hover:underline"
                  >
                    Try running a sync?
                  </button>
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
    </div>
  );
}

// ================= Micro Components =================

function StatCard({ title, value, subtext, icon, trend, progress, actionLabel }: any) {
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
        <p className="text-3xl font-serif text-emerald-950 mb-1">{value}</p>
        <p className="text-xs text-stone-400">{subtext}</p>
      </div>
      {progress !== undefined && (
        <div className="mt-6">
          <div className="flex justify-between text-xs mb-2">
            <span className="font-bold text-emerald-700">{progress}%</span>
            {trend && <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{trend}</span>}
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{ width: `${progress}%` }} />
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
            <h4 className="font-medium text-emerald-950 group-hover:text-emerald-700 transition-colors">{name}</h4>
            <p className="text-sm text-stone-500">{type} · {guests} guests</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[status]}`}>{status}</span>
      </div>
      <div className="mt-3 pl-14 flex items-center gap-6 text-xs text-stone-400">
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {dates}</span>
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
          <p className="text-sm font-medium text-emerald-900">{name}</p>
          <p className="text-xs text-stone-500">{item}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-emerald-700">{amount}</p>
        <p className="text-[10px] text-stone-400">{time}</p>
      </div>
    </div>
  );
}

function MailIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}