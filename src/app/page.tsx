

// // "use client";

// // import React, { useEffect, useMemo, useState } from "react";
// // import { Phone, Mail, MapPin, Calendar, Heart, Trees, Home } from "lucide-react";

// // export default function DolfriogHomepage() {
// //   const [activeImage, setActiveImage] = useState(0);
// //   const [scrolled, setScrolled] = useState(false);

// //   const heroImages = useMemo(() => ["/full_house.png"], []);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 20);
// //     onScroll();
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   const scrollToSection = (id: string) => {
// //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Header */}
// //       <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
// //   <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
// //     <div className="flex items-center gap-6">
// //       <a href="/" className="text-2xl sm:text-3xl font-serif text-emerald-800">
// //         Dolfriog Hall
// //       </a>
// //       <nav className="hidden sm:flex gap-4 text-sm font-medium text-emerald-800">
// //         <a href="/about" className="hover:text-emerald-600 transition-colors">
// //           Our Story
// //         </a>
// //         <a href="/#stays" className="hover:text-emerald-600 transition-colors">
// //           Stays
// //         </a>
// //       </nav>
// //     </div>

// //     <a
// //       href="/booking"
// //       className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md text-sm sm:text-base transition-colors"
// //     >
// //       Book Your Stay
// //     </a>
// //   </div>
// // </header>


// //       {/* Hero */}
// //       <section id="hero" className="relative h-screen">
// //         <div className="absolute inset-0">
// //           {/* Background image (supports future carousel) */}
// //           {heroImages.map((img, idx) => (
// //             <div
// //               key={img}
// //               className={`absolute inset-0 transition-opacity duration-700 ${
// //                 activeImage === idx ? "opacity-100" : "opacity-0"
// //               }`}
// //             >
// //               <img
// //                 src={img}
// //                 alt="Dolfriog Hall in the heart of Snowdonia"
// //                 className="w-full h-full object-cover"
// //               />
// //               {/* Keep house clear; darken right side for copy */}
// //               <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/35 to-transparent" />
// //               {/* Subtle bottom fade for CTA legibility */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
// //             </div>
// //           ))}
// //         </div>

// //         <div className="relative h-full flex items-center">
// //           <div className="max-w-7xl mx-auto px-6 w-full pt-16">
// //             <div className="ml-auto max-w-xl text-white text-right">
// //               <div className="inline-flex items-center gap-2 justify-end mb-4">
// //                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-emerald-200">
// //                   <MapPin className="w-4 h-4" />
// //                   Snowdonia National Park · Wales
// //                 </span>
// //               </div>

// //               <p className="uppercase tracking-widest text-[11px] sm:text-sm text-emerald-200 mb-4">
// //                 Grade II Listed Victorian Estate · Ancient Celtic Rainforest
// //               </p>

// //               <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight mb-5">
// //                 Stay Somewhere
// //                 <br />
// //                 You’ll Never Forget
// //               </h1>

// //               <p className="text-base sm:text-xl text-white/90 mb-7 leading-relaxed">
// //                 A rare Welsh retreat for people who want real peace: a historic hall for unforgettable
// //                 gatherings, a secluded tiny house for two, and wild camping in woodland beside the river.
// //               </p>

// //               {/* What we sell (clarity) */}
// //               <div className="flex flex-col gap-2 items-end mb-8">
// //                 <div className="inline-flex flex-wrap justify-end gap-2">
// //                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
// //                     Hall for groups (up to 20)
// //                   </span>
// //                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
// //                     Tiny house glamping (2)
// //                   </span>
// //                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
// //                     Wild camping
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="flex flex-col sm:flex-row gap-3 justify-end">
// //                 <button
// //                   type="button"
// //                   onClick={() => scrollToSection("stays")}
// //                   className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-md text-lg font-medium transition-colors"
// //                 >
// //                   Explore Stays
// //                 </button>

// //                 <a
// //                   href="/booking"
// //                   className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white/10 px-7 py-4 rounded-md text-lg font-medium transition-colors"
// //                 >
// //                   Check Availability
// //                 </a>
// //               </div>

// //               <p className="mt-4 text-xs sm:text-sm text-white/70">
// //                 Booking is an enquiry — we confirm within 24 hours.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={() => scrollToSection("about")}
// //           className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/75 hover:text-white transition-colors text-sm"
// //         >
// //           Scroll to discover
// //         </button>
// //       </section>

// //       {/* Welcome */}
// //       <section id="about" className="py-16 sm:py-24 px-4 bg-stone-50">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-6">
// //                 Welcome to Dolfriog
// //               </h2>

// //               <p className="text-gray-700 text-lg leading-relaxed mb-6">
// //                 Built in 1830 by George Holmes Jackson, Dolfriog Hall is a beautifully preserved piece
// //                 of Welsh history. Our Grade II-listed Tudor-Gothic estate sits in the stunning Nanmor
// //                 Valley, just outside the village of Beddgelert.
// //               </p>

// //               <p className="text-gray-700 text-lg leading-relaxed mb-6">
// //                 Set within hundreds of acres of ancient Celtic rainforest beside a flowing river, we
// //                 offer something rare: the feeling of stepping back in time while being completely
// //                 immersed in nature.
// //               </p>

// //               <p className="text-gray-700 text-lg leading-relaxed">
// //                 From its years as a school residential centre to the stories held within these walls,
// //                 Dolfriog is a place with a living legacy — now welcoming guests to write the next chapter.
// //               </p>

// //               <div className="mt-8 flex flex-col sm:flex-row gap-3">
// //                 <a
// //                   href="/booking"
// //                   className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
// //                 >
// //                   Enquire about dates
// //                 </a>
// //                 <button
// //                   type="button"
// //                   onClick={() => scrollToSection("stays")}
// //                   className="inline-flex items-center justify-center border border-emerald-200 text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
// //                 >
// //                   See accommodation
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="relative">
// //               <img src="/close_up.png" alt="Dolfriog Hall detail" className="rounded-lg shadow-2xl w-full" />
// //               <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
// //                 <p className="text-4xl font-bold mb-1">1830</p>
// //                 <p className="text-sm text-white/80">Est.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Accommodation */}
// //       <section id="stays" className="py-16 sm:py-24 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-14">
// //             <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-4">
// //               Choose Your Experience
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
// //               Three ways to stay — one unforgettable setting. Pick the vibe, we’ll help with the details.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {/* Hall */}
// //             <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
// //               <div className="relative h-64">
// //                 <img src="/cozy_hall.png" alt="Dolfriog Hall interior" className="w-full h-full object-cover" />
// //                 <div className="absolute top-4 left-4 bg-black/45 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   Groups · Celebrations · Retreats
// //                 </div>
// //                 <div className="absolute top-4 right-4 bg-emerald-800 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   Historic House
// //                 </div>
// //               </div>

// //               <div className="p-6">
// //                 <div className="flex items-start gap-3 mb-4">
// //                   <Home className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <h3 className="text-2xl font-serif text-emerald-900 mb-1">Dolfriog Hall</h3>
// //                     <p className="text-gray-600 text-sm">Sleeps up to 20 · Exclusive estate feel</p>
// //                   </div>
// //                 </div>

// //                 <p className="text-gray-700 mb-6 leading-relaxed">
// //                   The main hall for big weekends: long dinners, fireside chats, and waking up to the valley.
// //                   Ideal for family gatherings, celebrations, or group retreats.
// //                 </p>

// //                 <ul className="space-y-2 mb-6 text-sm text-gray-600">
// //                   <li>✓ Original features + character</li>
// //                   <li>✓ Space to gather (and to escape)</li>
// //                   <li>✓ Surrounded by woodland + river</li>
// //                   <li>✓ Great base for Snowdonia</li>
// //                 </ul>

// //                 <a
// //                   href="/booking"
// //                   className="block w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-md transition-colors font-medium"
// //                 >
// //                   Check availability
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Tiny House */}
// //             <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
// //               <div className="relative h-64">
// //                 {/* FIX: you had tiny_house.png0 (broken). It must be /tiny_house.png */}
// //                 <img src="/tiny_house.png" alt="Spindrift Tiny House" className="w-full h-full object-cover" />
// //                 <div className="absolute top-4 left-4 bg-black/45 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   For two · Quiet · Romantic
// //                 </div>
// //                 <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   Glamping
// //                 </div>
// //               </div>

// //               <div className="p-6">
// //                 <div className="flex items-start gap-3 mb-4">
// //                   <Trees className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <h3 className="text-2xl font-serif text-emerald-900 mb-1">Spindrift Tiny House</h3>
// //                     <p className="text-gray-600 text-sm">Sleeps 2 · Pet-friendly</p>
// //                   </div>
// //                 </div>

// //                 <p className="text-gray-700 mb-6 leading-relaxed">
// //                   A private sanctuary tucked into the rainforest. Wake to birdsong, spend the day walking the gorge,
// //                   and fall asleep to the sound of the river.
// //                 </p>

// //                 <ul className="space-y-2 mb-6 text-sm text-gray-600">
// //                   <li>✓ Secluded & peaceful</li>
// //                   <li>✓ Riverside setting</li>
// //                   <li>✓ Kitchen included</li>
// //                   <li>✓ Dogs welcome</li>
// //                 </ul>

// //                 <a
// //                   href="/booking"
// //                   className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md transition-colors font-medium"
// //                 >
// //                   Check availability
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Wild Camping */}
// //             <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
// //               <div className="relative h-64">
// //                 <img src="/glamping.png" alt="Wild camping in woodland" className="w-full h-full object-cover" />
// //                 <div className="absolute top-4 left-4 bg-black/45 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   Simple · Wild · Grounded
// //                 </div>
// //                 <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
// //                   Adventure
// //                 </div>
// //               </div>

// //               <div className="p-6">
// //                 <div className="flex items-start gap-3 mb-4">
// //                   <MapPin className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <h3 className="text-2xl font-serif text-emerald-900 mb-1">Wild Camping</h3>
// //                     <p className="text-gray-600 text-sm">Pitches · True outdoor reset</p>
// //                   </div>
// //                 </div>

// //                 <p className="text-gray-700 mb-6 leading-relaxed">
// //                   For real adventurers. Pitch up under ancient trees, breathe the clean mountain air,
// //                   and reconnect with nature in its purest form.
// //                 </p>

// //                 <ul className="space-y-2 mb-6 text-sm text-gray-600">
// //                   <li>✓ Ancient forest setting</li>
// //                   <li>✓ Basic eco facilities</li>
// //                   <li>✓ Fresh mountain water</li>
// //                   <li>✓ Wild Wales, properly</li>
// //                 </ul>

// //                 <a
// //                   href="/booking"
// //                   className="block w-full text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors font-medium"
// //                 >
// //                   Book a pitch
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="mt-10 text-center">
// //             <p className="text-gray-600">
// //               Not sure what suits you?{" "}
// //               <a href="/booking" className="text-emerald-800 font-medium underline underline-offset-4 hover:text-emerald-700">
// //                 Send an enquiry
// //               </a>{" "}
// //               and we’ll recommend the best option.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Location */}
// //       <section className="py-16 sm:py-24 px-4 bg-emerald-900 text-white">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h2 className="text-3xl sm:text-4xl font-serif mb-6">The Heart of Snowdonia</h2>
// //               <p className="text-emerald-100 text-lg leading-relaxed mb-8">
// //                 A base that feels remote — but puts the best of Snowdonia within easy reach. Walk the gorge, explore
// //                 Beddgelert, or head for the peaks.
// //               </p>

// //               <div className="space-y-4">
// //                 <div className="flex items-start gap-3">
// //                   <MapPin className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <p className="font-medium">Minutes from Beddgelert</p>
// //                     <p className="text-emerald-200 text-sm">Shops, pubs & restaurants</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-3">
// //                   <Trees className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <p className="font-medium">Aberglaslyn Gorge</p>
// //                     <p className="text-emerald-200 text-sm">Spectacular trails nearby</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-3">
// //                   <Heart className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
// //                   <div>
// //                     <p className="font-medium">Peak days & slow days</p>
// //                     <p className="text-emerald-200 text-sm">From Snowdon routes to riverside calm</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-8">
// //                 <a
// //                   href="/booking"
// //                   className="inline-flex items-center justify-center bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
// //                 >
// //                   Check availability
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
// //               {/* You can make this local later if you want */}
// //               <img
// //                 src="/snowdon.png"
// //                 alt="Snowdonia landscape"
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Activities */}
// //       <section className="py-16 sm:py-24 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-12 text-center">
// //             Adventures Await
// //           </h2>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 title: "Mountain Hiking",
// //                 desc: "Direct access to Snowdon and countless trails",
// //                 img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
// //               },
// //               {
// //                 title: "Forest Walks",
// //                 desc: "Explore ancient Celtic rainforest paths",
// //                 img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
// //               },
// //               {
// //                 title: "Wild Swimming",
// //                 desc: "Crystal clear rivers and mountain lakes",
// //                 img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
// //               },
// //               {
// //                 title: "Historic Villages",
// //                 desc: "Beddgelert, Portmeirion & the Welsh Highland Railway",
// //                 img: "https://images.unsplash.com/photo-1467245581793-19089a60b2c2?w=600&q=80",
// //               },
// //               {
// //                 title: "Wildlife Watching",
// //                 desc: "Rare species in protected habitat",
// //                 img: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&q=80",
// //               },
// //               {
// //                 title: "Stargazing",
// //                 desc: "Dark skies away from light pollution",
// //                 img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
// //               },
// //             ].map((activity) => (
// //               <div key={activity.title} className="group cursor-pointer">
// //                 <div className="relative h-48 rounded-lg overflow-hidden mb-4">
// //                   <img
// //                     src={activity.img}
// //                     alt={activity.title}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //                   <h3 className="absolute bottom-4 left-4 text-white font-serif text-xl">{activity.title}</h3>
// //                 </div>
// //                 <p className="text-gray-600">{activity.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="py-16 sm:py-24 px-4 bg-stone-50">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-12">
// //             Guest Experiences
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="bg-white p-8 rounded-lg shadow-md">
// //               <div className="text-amber-500 mb-4">★★★★★</div>
// //               <p className="text-gray-700 italic mb-4">
// //                 "An absolutely magical place. The hall is stunning, full of character and history. Waking up
// //                 to the sound of the river and views of the mountains was unforgettable."
// //               </p>
// //               <p className="text-gray-600 font-medium">- Sarah M.</p>
// //             </div>

// //             <div className="bg-white p-8 rounded-lg shadow-md">
// //               <div className="text-amber-500 mb-4">★★★★★</div>
// //               <p className="text-gray-700 italic mb-4">
// //                 "The tiny house was perfect for our romantic getaway. Complete privacy, beautifully designed,
// //                 and the location in the forest is simply breathtaking. Can't wait to return."
// //               </p>
// //               <p className="text-gray-600 font-medium">- James & Emma</p>
// //             </div>
// //           </div>

// //           <div className="mt-10">
// //             <a
// //               href="/booking"
// //               className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
// //             >
// //               Enquire about your dates
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact / Booking */}
// //       <section id="book" className="py-16 sm:py-24 px-4 bg-emerald-800 text-white">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h2 className="text-3xl sm:text-4xl font-serif mb-6">Plan Your Visit</h2>
// //           <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
// //             Want to check dates or ask a question first? Send an enquiry — we’ll reply within 24 hours.
// //           </p>

// //           {/* Primary CTA to booking route */}
// //           <div className="mb-10">
// //             <a
// //               href="/booking"
// //               className="inline-flex items-center justify-center bg-white text-emerald-900 hover:bg-emerald-50 px-10 py-4 rounded-md font-semibold text-lg transition-colors"
// //             >
// //               <Calendar className="w-5 h-5 mr-2" />
// //               Check Availability
// //             </a>
// //           </div>

// //           <div className="grid sm:grid-cols-3 gap-8 mb-12">
// //             <div className="bg-emerald-900/50 p-6 rounded-lg">
// //               <Phone className="w-8 h-8 text-emerald-200 mx-auto mb-3" />
// //               <p className="text-sm text-emerald-200 mb-2">Call Us</p>
// //               <p className="font-medium">01766 XXX XXX</p>
// //             </div>

// //             <div className="bg-emerald-900/50 p-6 rounded-lg">
// //               <Mail className="w-8 h-8 text-emerald-200 mx-auto mb-3" />
// //               <p className="text-sm text-emerald-200 mb-2">Email</p>
// //               <p className="font-medium">stay@dolfriog.wales</p>
// //             </div>

// //             <div className="bg-emerald-900/50 p-6 rounded-lg">
// //               <MapPin className="w-8 h-8 text-emerald-200 mx-auto mb-3" />
// //               <p className="text-sm text-emerald-200 mb-2">Location</p>
// //               <p className="font-medium">Beddgelert area</p>
// //             </div>
// //           </div>

// //           <div className="bg-emerald-900/50 p-8 rounded-lg text-left max-w-2xl mx-auto">
// //             <h3 className="text-xl font-serif mb-4">Find Us</h3>
// //             <p className="text-emerald-100 mb-2">Dolfriog Hall</p>
// //             <p className="text-emerald-100 mb-2">Llanfrothen, Penrhyndeudraeth</p>
// //             <p className="text-emerald-100 mb-2">Gwynedd LL48 6SN</p>
// //             <p className="text-emerald-100">Wales, United Kingdom</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-emerald-950 text-emerald-300 py-12 px-4">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h2 className="text-2xl font-serif text-white mb-4">Dolfriog Hall</h2>
// //           <p className="text-sm mb-6">A Grade II-Listed Victorian Estate in Snowdonia National Park</p>
// //           <p className="text-xs text-emerald-400">
// //             © 2025 Dolfriog Hall. Preserving Welsh heritage since 1830.
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }
// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { Phone, Mail, MapPin, Calendar, Heart, Trees, Home } from "lucide-react";

// export default function DolfriogHomepage() {
//   const [activeImage, setActiveImage] = useState(0);

//   const heroImages = useMemo(() => ["/full_house.png"], []);

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             <a href="/" className="text-2xl sm:text-3xl font-serif text-emerald-800">
//               Dolfriog Hall
//             </a>
//             {/* ✅ Now visible on mobile */}
//             <nav className="flex gap-4 text-sm font-medium text-emerald-800">
//               <a href="/about" className="hover:text-emerald-600 transition-colors">
//                 Our Story
//               </a>
//               <a href="/#stays" className="hover:text-emerald-600 transition-colors">
//                 Stays
//               </a>
//             </nav>
//           </div>

//           <a
//             href="/booking"
//             className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md text-sm sm:text-base transition-colors"
//           >
//             Book Your Stay
//           </a>
//         </div>
//       </header>

//       {/* Hero */}
//       {/* ✅ Use safe viewport height to stop mobile bounce */}
//       <section id="hero" className="relative min-h-[100svh]">
//         <div className="absolute inset-0">
//           {heroImages.map((img, idx) => (
//             <div
//               key={img}
//               className={`absolute inset-0 transition-opacity duration-700 ${
//                 activeImage === idx ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={img}
//                 alt="Dolfriog Hall in the heart of Snowdonia"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/35 to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
//             </div>
//           ))}
//         </div>

//         <div className="relative h-full flex items-center">
//           <div className="max-w-7xl mx-auto px-6 w-full pt-20">
//             <div className="ml-auto max-w-xl text-white text-right">
//               <div className="inline-flex items-center gap-2 justify-end mb-4">
//                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-emerald-200">
//                   <MapPin className="w-4 h-4" />
//                   Snowdonia National Park · Wales
//                 </span>
//               </div>

//               <p className="uppercase tracking-widest text-[11px] sm:text-sm text-emerald-200 mb-4">
//                 Grade II Listed Victorian Estate · Ancient Celtic Rainforest
//               </p>

//               <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight mb-5">
//                 Stay Somewhere
//                 <br />
//                 You’ll Never Forget
//               </h1>

//               <p className="text-base sm:text-xl text-white/90 mb-7 leading-relaxed">
//                 A rare Welsh retreat for people who want real peace: a historic hall for unforgettable
//                 gatherings, a secluded tiny house for two, and wild camping in woodland beside the river.
//               </p>

//               <div className="flex flex-col gap-2 items-end mb-8">
//                 <div className="inline-flex flex-wrap justify-end gap-2">
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
//                     Hall for groups (up to 20)
//                   </span>
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
//                     Tiny house glamping (2)
//                   </span>
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
//                     Wild camping
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 justify-end">
//                 <button
//                   type="button"
//                   onClick={() => scrollToSection("stays")}
//                   className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-md text-lg font-medium transition-colors"
//                 >
//                   Explore Stays
//                 </button>

//                 <a
//                   href="/booking"
//                   className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white/10 px-7 py-4 rounded-md text-lg font-medium transition-colors"
//                 >
//                   Check Availability
//                 </a>
//               </div>

//               <p className="mt-4 text-xs sm:text-sm text-white/70">
//                 Booking is an enquiry — we confirm within 24 hours.
//               </p>
//             </div>
//           </div>
//         </div>

//         <button
//           type="button"
//           onClick={() => scrollToSection("about")}
//           className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/75 hover:text-white transition-colors text-sm"
//         >
//           Scroll to discover
//         </button>
//       </section>

//       {/* Welcome */}
//       {/* ✅ scroll-mt-24 offsets fixed header */}
//       <section id="about" className="scroll-mt-24 py-16 sm:py-24 px-4 bg-stone-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-6">
//                 Welcome to Dolfriog
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                 Built in 1830 by George Holmes Jackson, Dolfriog Hall is a beautifully preserved piece
//                 of Welsh history. Our Grade II-listed Tudor-Gothic estate sits in the stunning Nanmor
//                 Valley, just outside the village of Beddgelert.
//               </p>
//               <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                 Set within hundreds of acres of ancient Celtic rainforest beside a flowing river, we
//                 offer something rare: the feeling of stepping back in time while being completely
//                 immersed in nature.
//               </p>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 From its years as a school residential centre to the stories held within these walls,
//                 Dolfriog is a place with a living legacy — now welcoming guests to write the next chapter.
//               </p>

//               <div className="mt-8 flex flex-col sm:flex-row gap-3">
//                 <a
//                   href="/booking"
//                   className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
//                 >
//                   Enquire about dates
//                 </a>
//                 <button
//                   type="button"
//                   onClick={() => scrollToSection("stays")}
//                   className="inline-flex items-center justify-center border border-emerald-200 text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
//                 >
//                   See accommodation
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <img src="/close_up.png" alt="Dolfriog Hall detail" className="rounded-lg shadow-2xl w-full" />
//               <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
//                 <p className="text-4xl font-bold mb-1">1830</p>
//                 <p className="text-sm text-white/80">Est.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Accommodation */}
//       <section id="stays" className="scroll-mt-24 py-16 sm:py-24 px-4">
//         {/* ... rest of your file unchanged ... */}
"use client";

import React, { useMemo, useState } from "react";
import { Phone, Mail, MapPin, Calendar, Heart, Trees, Home } from "lucide-react";

export default function DolfriogHomepage() {
  const [activeImage] = useState(0);

  const heroImages = useMemo(() => ["/full_house.png"], []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ================= Header ================= */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="/" className="text-2xl sm:text-3xl font-serif text-emerald-800">
              Dolfriog Hall
            </a>
            {/* ✅ visible on mobile now */}
            <nav className="flex gap-4 text-sm font-medium text-emerald-800">
              <a href="/about" className="hover:text-emerald-600 transition-colors">
                Our Story
              </a>
              <a href="/#stays" className="hover:text-emerald-600 transition-colors">
                Stays
              </a>
            </nav>
          </div>

          <a
            href="/booking"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md text-sm sm:text-base transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </header>

      {/* ================= Hero ================= */}
      {/* ✅ safe viewport height stops mobile bounce */}
      <section id="hero" className="relative min-h-[100svh]">
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeImage === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt="Dolfriog Hall in the heart of Snowdonia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-24">
            <div className="ml-auto max-w-xl text-white text-right">
              <div className="inline-flex items-center gap-2 justify-end mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-emerald-200">
                  <MapPin className="w-4 h-4" />
                  Snowdonia National Park · Wales
                </span>
              </div>

              <p className="uppercase tracking-widest text-[11px] sm:text-sm text-emerald-200 mb-4">
                Grade II Listed Victorian Estate · Ancient Celtic Rainforest
              </p>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight mb-5">
                Stay Somewhere
                <br />
                You’ll Never Forget
              </h1>

              <p className="text-base sm:text-xl text-white/90 mb-7 leading-relaxed">
                A rare Welsh retreat for people who want real peace: a historic hall for unforgettable
                gatherings, a secluded tiny house for two, and wild camping in woodland beside the river.
              </p>

              <div className="flex flex-col gap-2 items-end mb-8">
                <div className="inline-flex flex-wrap justify-end gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
                    Hall for groups (up to 20)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
                    Tiny house glamping (2)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
                    Wild camping
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => scrollToSection("stays")}
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-md text-lg font-medium transition-colors"
                >
                  Explore Stays
                </button>

                <a
                  href="/booking"
                  className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white/10 px-7 py-4 rounded-md text-lg font-medium transition-colors"
                >
                  Check Availability
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-white/70">
                Booking is an enquiry — we confirm within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/75 hover:text-white transition-colors text-sm"
        >
          Scroll to discover
        </button>
      </section>

      {/* ================= Welcome ================= */}
      {/* ✅ offset for fixed header */}
      <section id="about" className="scroll-mt-28 py-16 sm:py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-6">
                Welcome to Dolfriog
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Built in 1830 by George Holmes Jackson, Dolfriog Hall is a beautifully preserved piece
                of Welsh history. Our Grade II-listed Tudor-Gothic estate sits in the stunning Nanmor
                Valley, just outside the village of Beddgelert.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Set within hundreds of acres of ancient Celtic rainforest beside a flowing river, we
                offer something rare: the feeling of stepping back in time while being completely
                immersed in nature.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                From its years as a school residential centre to the stories held within these walls,
                Dolfriog is a place with a living legacy — now welcoming guests to write the next chapter.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Enquire about dates
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection("stays")}
                  className="inline-flex items-center justify-center border border-emerald-200 text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  See accommodation
                </button>
              </div>
            </div>

            <div className="relative">
              <img src="/close_up.png" alt="Dolfriog Hall detail" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold mb-1">1830</p>
                <p className="text-sm text-white/80">Est.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-emerald-950 text-emerald-300 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-white mb-4">Dolfriog Hall</h2>
          <p className="text-sm mb-6">A Grade II-Listed Victorian Estate in Snowdonia National Park</p>
          <p className="text-xs text-emerald-400">
            © 2025 Dolfriog Hall. Preserving Welsh heritage since 1830.
          </p>
        </div>
      </footer>
    </div>
  );
}
