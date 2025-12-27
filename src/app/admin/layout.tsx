// app/admin/layout.tsx
"use client";

import React from "react";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Hammer, 
  Settings, 
  LogOut,
  Tent,
  ScrollText
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-stone-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-950 text-emerald-100 flex flex-col hidden md:flex">
        <div className="p-8 border-b border-emerald-900">
          <h1 className="font-serif text-2xl text-white">Dolfriog Hall</h1>
          <p className="text-xs text-emerald-400 uppercase tracking-widest mt-1">Estate Office</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<LayoutDashboard />} label="Overview" active />
          <NavItem icon={<CalendarDays />} label="Bookings & Calendar" />
          <NavItem icon={<ScrollText />} label="Enquiries" badge="3" />
          <div className="pt-4 pb-2">
            <p className="px-4 text-xs font-bold text-emerald-500 uppercase tracking-wider">Projects</p>
          </div>
          <NavItem icon={<Hammer />} label="Renovation Fund" />
          <NavItem icon={<Users />} label="Donors (Guild)" />
          <NavItem icon={<Tent />} label="Campsite Status" />
        </nav>

        <div className="p-4 border-t border-emerald-900">
          <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-emerald-300 hover:text-white transition-colors w-full">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

// Helper Component for Nav Items
function NavItem({ icon, label, active = false, badge }: { icon: any, label: string, active?: boolean, badge?: string }) {
  return (
    <button 
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
        active 
          ? "bg-emerald-900 text-white shadow-lg shadow-black/10" 
          : "text-emerald-200/80 hover:bg-emerald-900/50 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
        {label}
      </div>
      {badge && (
        <span className="bg-amber-500 text-emerald-950 text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}