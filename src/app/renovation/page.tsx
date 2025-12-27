"use client";

import React, { useState } from "react";
import { Hammer, Heart, History, TreeDeciduous, ArrowRight, Award } from "lucide-react";

export default function RenovationPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Navigation (Simplified for this page) */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-serif text-emerald-900">
            Dolfriog Hall
          </a>
          <a href="/" className="text-sm font-medium text-stone-600 hover:text-emerald-800">
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Ideally a picture of the renovation work or scaffolding here */}
            <img src="/close_up.png" alt="Textures of stone" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider mb-6 border border-amber-500/30">
            THE RESTORATION PROJECT
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Help Us Wake the <br /> Sleeping Giant
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            For decades, Dolfriog Hall was a place of adventure for thousands of children. 
            Now, the hall has fallen silent—and we need your help to bring it back to life.
          </p>
        </div>
      </header>

      {/* The Story / Hook */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-stone mx-auto">
            <h2 className="text-3xl font-serif text-emerald-900 mb-6">Why We Are Asking for Help</h2>
            <p className="mb-4 text-stone-700">
              If you grew up in Northamptonshire or the surrounding areas, there is a good chance you—or your parents—stayed at Dolfriog Hall. It was more than a school trip; it was a rite of passage. It was where you climbed your first mountain, walked the gorge, and sat by the fire with friends.
            </p>
            <p className="mb-4 text-stone-700">
              <strong>But time has been unkind to the Hall.</strong>
            </p>
            <p className="mb-4 text-stone-700">
              After the education centre closed, the estate faced an uncertain future. The roof is failing, the ancient windows are rotting, and the Celtic rainforest is reclaiming the grounds.
            </p>
            <p className="text-stone-700">
              We are a small family team committed to saving this Grade II listed treasure, but the scale of the work is immense. We aren't just fixing a house; we are preserving a piece of Welsh heritage and a repository of thousands of childhood memories.
            </p>
          </div>
        </div>
      </section>

      {/* The Plan / Timeline */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-emerald-900 text-center mb-16">The Road to Restoration</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Phase 1 */}
            <div className="relative p-8 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm">
              <div className="absolute -top-6 left-8 bg-emerald-600 text-white p-3 rounded-lg shadow-lg">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 1: Secure the Shell</h3>
              <p className="text-sm font-bold text-amber-600 mb-4">IN PROGRESS</p>
              <p className="text-stone-600 mb-4">
                We are urgently repairing the Victorian slate roof and leadwork to stop water ingress. This is critical to save the original plasterwork.
              </p>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 w-3/4 h-full" />
              </div>
              <p className="text-xs text-right mt-1 text-stone-500">75% Funded</p>
            </div>

            {/* Phase 2 */}
            <div className="relative p-8 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm opacity-75">
              <div className="absolute -top-6 left-8 bg-emerald-800 text-white p-3 rounded-lg shadow-lg">
                <TreeDeciduous className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 2: The Rainforest</h3>
              <p className="text-sm font-bold text-stone-500 mb-4">STARTING SPRING 2025</p>
              <p className="text-stone-600">
                Restoring the overgrown paths and managing invasive species in our ancient Celtic rainforest, allowing safe public access to the river again.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative p-8 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm opacity-75">
              <div className="absolute -top-6 left-8 bg-emerald-900 text-white p-3 rounded-lg shadow-lg">
                <History className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 3: The Interiors</h3>
              <p className="text-sm font-bold text-stone-500 mb-4">FUTURE GOAL</p>
              <p className="text-stone-600">
                Restoring the dormitory wings into comfortable accommodation, preserving the graffiti left by students over the last 50 years where possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask / GoFundMe Style */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-emerald-900 mb-6">Become a Part of History</h2>
              <p className="text-lg text-emerald-800 mb-8">
                We aren't asking for handouts—we're inviting you to become a guardian of the Hall. In exchange for your support, we offer permanent recognition on the estate.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-sm">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-900">Sponsor a Slate (£50)</h4>
                        <p className="text-sm text-emerald-700">Your name (or a loved one's) written on the underside of a new Welsh slate, protecting the roof for another 100 years.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-sm">
                        <TreeDeciduous className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-900">Plant a Native Oak (£150)</h4>
                        <p className="text-sm text-emerald-700">We will plant a sapling in the rainforest in your name, with a GPS tag so you can visit it.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-sm">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-900">Founding Member (£500+)</h4>
                        <p className="text-sm text-emerald-700">Includes a plaque on the "Wall of Guardians" and a voucher for a 2-night stay once renovations are complete.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
                <div className="mb-6">
                    <p className="text-sm font-semibold text-emerald-600 mb-1">Fundraising Goal</p>
                    <div className="flex items-end gap-2 mb-2">
                        <span className="text-4xl font-bold text-emerald-900">£12,450</span>
                        <span className="text-stone-500 mb-1">raised of £50,000 goal</span>
                    </div>
                    <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 w-[25%] h-full rounded-full" />
                    </div>
                    <p className="text-xs text-stone-400 mt-2">142 supporters</p>
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg shadow-md transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Donate via GoFundMe <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-center text-stone-500">
                        All donations go directly to the "Save Dolfriog" material fund.
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100">
                    <h5 className="text-sm font-bold text-stone-800 mb-4">Recent Supporters</h5>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">JD</div>
                            <div>
                                <p className="font-medium text-stone-900">John Doe</p>
                                <p className="text-xs text-stone-500">"For the Class of '82"</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">SM</div>
                            <div>
                                <p className="font-medium text-stone-900">Sarah Miller</p>
                                <p className="text-xs text-stone-500">"My favourite school trip memory"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-12 text-center">
        <p className="text-sm">Thank you for helping us preserve Dolfriog Hall.</p>
        <a href="/" className="text-white underline mt-2 block">Return to Homepage</a>
      </footer>
    </div>
  );
}