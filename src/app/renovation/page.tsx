"use client";

import React from "react";
import { Hammer, Heart, History, TreeDeciduous, ArrowRight, Award, Mountain } from "lucide-react";

export default function RenovationPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Navigation */}
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
      <header className="relative pt-36 pb-24 px-6 bg-emerald-950 text-white overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img src="/close_up.png" alt="Stone texture" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-amber-500/20 text-amber-200 text-xs font-bold tracking-widest mb-8 border border-amber-500/30">
            THE RESTORATION PROJECT
          </span>
          <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            Help Us Wake the <br /> Sleeping Giant
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            A Grade II listed masterpiece. A rare Celtic rainforest. A home to thousands of childhood memories. 
            <span className="block mt-4 text-white font-medium">It’s time to bring the heartbeat back to Dolfriog.</span>
          </p>
        </div>
      </header>

      {/* The Emotional Hook */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-stone mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-900 mb-8">
              More Than Just Stone & Slate
            </h2>
            <p className="text-xl leading-relaxed text-stone-600">
              Some places have a soul. You can feel it in the creak of the floorboards and the rush of the river outside. For over 50 years, Dolfriog Hall was a rite of passage for children from Northamptonshire—the place where they climbed their first mountain and saw their first dark sky.
            </p>
            <p className="text-xl leading-relaxed text-stone-600">
              But today, Dolfriog needs a rite of passage of its own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <History className="w-8 h-8 text-emerald-800 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-emerald-900 mb-2">The Heritage</h3>
              <p className="text-sm text-stone-600">
                Built in 1830, the Hall is a Tudor-Gothic gem. We are fighting to save the original leadwork, the rotting windows, and the historic plasterwork before they are lost.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <TreeDeciduous className="w-8 h-8 text-emerald-800 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-emerald-900 mb-2">The Rainforest</h3>
              <p className="text-sm text-stone-600">
                The estate sits in a rare temperate rainforest. Your support helps us clear invasive species and protect this globally significant habitat.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <Mountain className="w-8 h-8 text-emerald-800 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-emerald-900 mb-2">The Future</h3>
              <p className="text-sm text-stone-600">
                We aren't turning this into a faceless hotel. We are restoring it as a family-run retreat that honors the thousands of footsteps that came before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan / Timeline */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-emerald-900 text-center mb-16">The Road to Restoration</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Phase 1 */}
            <div className="relative p-8 rounded-2xl bg-white border border-stone-200 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-6 left-8 bg-emerald-700 text-white p-3 rounded-lg shadow-lg">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 1: Sheltering the Legacy</h3>
              <p className="text-xs font-bold tracking-widest text-amber-600 mb-4 uppercase">Urgent · In Progress</p>
              <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                The roof is the hat that keeps the house warm. We are replacing thousands of Victorian slates and repairing the lead valleys to stop water ingress and save the structure.
              </p>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 w-3/4 h-full" />
              </div>
              <p className="text-xs text-right mt-2 text-stone-500 font-medium">75% Funded</p>
            </div>

            {/* Phase 2 */}
            <div className="relative p-8 rounded-2xl bg-white border border-stone-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -top-6 left-8 bg-emerald-800 text-white p-3 rounded-lg shadow-lg">
                <TreeDeciduous className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 2: The Wild Garden</h3>
              <p className="text-xs font-bold tracking-widest text-stone-500 mb-4 uppercase">Spring 2025</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Restoring the overgrown Victorian paths and managing the ancient woodland, ensuring the Celtic rainforest thrives for another century.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative p-8 rounded-2xl bg-white border border-stone-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -top-6 left-8 bg-emerald-900 text-white p-3 rounded-lg shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-emerald-900 mb-2">Phase 3: Breathing Life Back In</h3>
              <p className="text-xs font-bold tracking-widest text-stone-500 mb-4 uppercase">The Vision</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Turning the old dormitories into beautiful spaces for rest, while preserving the "graffiti history" left by students over the last 50 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask / GoFundMe Style */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: The Appeal */}
            <div>
              <h2 className="text-4xl font-serif mb-6">Be A Guardian of Dolfriog</h2>
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                Whether you stayed here 30 years ago, or simply believe that beautiful, historic things are worth saving—you can help. In exchange for your stewardship, we offer permanent recognition on the estate.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400 border border-white/10">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Sponsor a Slate (£50)</h4>
                        <p className="text-sm text-emerald-200 mt-1">Your name (or a loved one's) written on the underside of a new Welsh slate, protecting the roof for the next 100 years.</p>
                    </div>
                </div>
                
                <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400 border border-white/10">
                        <TreeDeciduous className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Plant a Native Oak (£150)</h4>
                        <p className="text-sm text-emerald-200 mt-1">We will plant a native sapling in the rainforest in your name to help regenerate the ecosystem. Includes GPS coordinates.</p>
                    </div>
                </div>
                
                <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-red-400 border border-white/10">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Founding Member (£500+)</h4>
                        <p className="text-sm text-emerald-200 mt-1">A bronze plaque on the "Wall of Guardians" in the main hall, plus a voucher for a 2-night stay upon completion.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Right Column: Donation Card */}
            <div className="bg-white text-stone-900 p-8 rounded-2xl shadow-2xl">
                <div className="mb-8">
                    <p className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">Current Goal: The Roof</p>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-serif text-stone-900">£12,450</span>
                        <span className="text-stone-500 font-medium">raised of £50,000</span>
                    </div>
                    <div className="w-full bg-stone-100 h-4 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 w-[25%] h-full rounded-full shadow-[0_0_10px_rgba(5,150,105,0.5)]" />
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-stone-500 font-medium">
                        <span>142 Guardians</span>
                        <span>25% Complete</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Add your real GoFundMe Link here */}
                    <a 
                      href="https://gofundme.com" 
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                    >
                        Donate to the Fund <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-xs text-center text-stone-400 leading-tight">
                        Payments are processed securely via GoFundMe.<br/>All funds go directly to materials & specialist labor.
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100">
                    <h5 className="text-sm font-bold text-stone-900 mb-4">Why people are donating</h5>
                    <div className="space-y-4">
                        <div className="flex gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-800 font-bold font-serif">A</div>
                            <div>
                                <p className="font-medium text-stone-900">Anne Roberts</p>
                                <p className="text-stone-500 italic">"I stayed here in 1984. It rained all week and I loved every minute. Save it for the next generation!"</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-800 font-bold font-serif">D</div>
                            <div>
                                <p className="font-medium text-stone-900">David & Tom</p>
                                <p className="text-stone-500 italic">"For the love of Welsh history. Good luck with the roof!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-12 text-center border-t border-emerald-900">
        <p className="text-sm font-medium">Thank you for helping us preserve Dolfriog Hall.</p>
        <div className="flex justify-center gap-6 mt-4 text-xs tracking-widest uppercase">
            <a href="/" className="hover:text-white transition-colors">Return Home</a>
            <a href="/booking" className="hover:text-white transition-colors">Book a Stay</a>
        </div>
      </footer>
    </div>
  );
}