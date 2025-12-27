"use client"
import React from 'react';
import { Heart, Home, Trees, Mountain, Plane, Users, Award, Compass } from 'lucide-react';

export default function DolfriogAbout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl sm:text-3xl font-serif text-emerald-800">Dolfriog Hall</a>
          <a href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">← Back to Home</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px]">
        <img 
          src="/steve_and_family.JPG" 
          alt="Steve and Hoda with their family" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl text-white font-serif mb-4">Our Story</h1>
            <p className="text-xl text-white/90">
              From the skies to the mountains, a journey home
            </p>
          </div>
        </div>
      </section>

      {/* Steve & Hoda's Story */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-4">Meet Steve & Hoda</h2>
            <p className="text-xl text-gray-600">Two souls who found each other, then found Dolfriog</p>
          </div>

          {/* Their Journey */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Some people spend their whole lives searching for home. For us, home found us in the most unexpected place—a weathered Victorian manor tucked into the ancient forests of Snowdonia, waiting patiently for someone to understand it.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              {/* Steve's Story */}
              <div className="bg-stone-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-serif text-emerald-900">Steve's Journey</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I joined the RAF at 18, trading the ground for the sky. For 27 years, I flew everything from nimble helicopters to mighty Chinooks, seeing the world from a perspective most people never experience. The mountains of Afghanistan, the deserts of Iraq, the wild landscapes that tested both machine and pilot.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In my final years, I headed up training for new pilots. Two master's degrees in pilot psychology taught me that flying isn't just about technical skill—it's about understanding how people think under pressure, how they learn, how they grow. I spent years shaping the minds of young aviators, helping them find their confidence in the clouds.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I retired at 45, I thought I'd miss the skies. Instead, I discovered I'd been searching for something else all along—solid ground, ancient trees, the kind of peace you can't find at 10,000 feet. And my dog, who's been my constant companion through this transition, leading me deeper into the wild places I've come to love.
                </p>
              </div>

              {/* Hoda's Story */}
              <div className="bg-stone-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-serif text-emerald-900">Hoda's Journey</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My story begins in Iraq, continues through Iran as a refugee, and lands in England when I was 12. Three countries, three languages, three versions of what "home" means. When you've been uprooted that many times, you learn that home isn't just a place—it's something you carry within yourself, something you create.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  That journey shaped everything about who I am. Now I work as a counselor, sitting with people through their own transitions, their grief, their moments of profound change. I understand what it's like to rebuild your life from nothing, to find beauty in starting over, to hold onto hope when everything feels uncertain.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nature has always been my anchor. No matter where I've lived, the outdoors has spoken a universal language. Trees don't care what country you're from. Mountains don't judge your accent. In nature, I've always felt truly home. And I've always believed in doing things authentically, sustainably, with care for what we're building and who it will serve.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-emerald-900 mb-6 mt-16">Finding Dolfriog</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When we first walked through Dolfriog's overgrown grounds, something just clicked. Here was a Grade II-listed Victorian manor built in 1830, sitting quietly in the Nanmor Valley, surrounded by hundreds of acres of ancient Celtic rainforest. It had been a school residential centre for decades—John Lennon himself is rumored to have stayed here as a child. Generations of young people had run through these halls, learned courage on these mountains, discovered themselves in these woods.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              But the building had gone silent. The halls were empty. The grounds were waiting. And we realized: this place was asking for exactly what we wanted to give. Steve's precision and discipline from years of military aviation. Hoda's deep understanding of what people need when they're transitioning, healing, searching. Our shared love of the outdoors, of authenticity, of creating something meaningful.
            </p>

            <div className="bg-emerald-50 rounded-xl p-8 my-8 border-l-4 border-emerald-700">
              <p className="text-lg text-emerald-900 italic">
                "We're not just restoring a building. We're creating a sanctuary—a place where people can step away from the noise, reconnect with nature, and find whatever they're searching for. Just like we did."
                <span className="block mt-4 not-italic text-base font-medium">— Steve & Hoda</span>
              </p>
            </div>

            <h2 className="text-3xl font-serif text-emerald-900 mb-6 mt-16">Our Vision for Dolfriog</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We're approaching this restoration the way Steve approached every flight plan: with meticulous care, respect for what we're working with, and deep appreciation for the responsibility we've been given. Every carved fireplace, every stone mullion window, every oak stair tells a story spanning nearly two centuries. We're not here to change those stories—we're here to make sure they continue.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Working closely with Eryri National Park Authority, we're preserving the building's magnificent Tudor-Gothic architecture while thoughtfully integrating modern comforts. The estate offers three distinct experiences: the grand Hall itself for groups and celebrations, our boutique Spindrift Tiny House for couples seeking forest solitude, and wild camping pitches for adventurers who want to sleep under these incredible dark skies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Hoda's passion for sustainability runs through every decision we make. We're committed to protecting these hundreds of acres of ancient rainforest, to treading lightly on this land that predates all of us. We want Dolfriog to be here for another two centuries, welcoming people who need what these mountains and forests have to offer.
            </p>

            <p className="text-gray-700 leading-relaxed">
              What we're really creating is a space for transformation. Steve spent 27 years teaching pilots how to navigate uncertainty, how to stay calm when everything's changing, how to trust themselves. Hoda has spent years sitting with people through their most difficult transitions, helping them find their way forward. Dolfriog is an extension of that work—a place where people can pause, breathe, and figure out their next chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Our Family Section */}
      <section className="py-16 sm:py-24 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-emerald-900 mb-6">Life at Dolfriog</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            You'll often find us exploring the forest trails with our dog, who's appointed himself the official greeter of Dolfriog. Or working on some aspect of the restoration, usually with muddy boots and cups of tea. We live here because we love it—these mountains, these trees, this wild Welsh weather that keeps things interesting.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            When you stay at Dolfriog, you're not just booking accommodation. You're becoming part of a story that includes Victorian gentry, wartime schoolchildren, poets who walked these valleys centuries ago, and now you. We can't wait to welcome you to what we hope will become your sanctuary too.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-emerald-900 mb-12 text-center">What Guides Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-serif text-emerald-900 mb-4">Precision & Care</h3>
              <p className="text-gray-600 leading-relaxed">
                From Steve's aviation background: every detail matters, every decision is thoughtful, and we never cut corners on what's important. This building deserves nothing less than our absolute best.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Trees className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-serif text-emerald-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                From Hoda's values: authenticity and environmental stewardship guide everything we do. This ancient forest, this historic building—we're just temporary custodians of something precious.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-serif text-emerald-900 mb-4">Space for Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                From our combined experience: we understand transitions, grief, searching, and finding. Dolfriog offers the space and peace people need to navigate their own journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Estate Today */}
      <section className="py-16 sm:py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-emerald-900 mb-12 text-center">Dolfriog Today</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="/full_house.png" 
                alt="Snowdonia mountains" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-emerald-900 mb-4">The Location</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nestled in the Nanmor Valley near Beddgelert, right in the heart of Eryri (Snowdonia) National Park. When Steve flew over these mountains during his RAF career, he never imagined he'd one day call them home. Now we wake up to Snowdon's peak every morning, surrounded by ancient Celtic rainforest and the sound of the river that runs through our estate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No other accommodation nearby. No light pollution. No noise except wind, water, and birdsong. Just you, the mountains, and hundreds of acres of protected wilderness.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif text-emerald-900 mb-4">The Building</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Built in 1830 by George Holmes Jackson and enhanced in 1885 by William Lowson, Dolfriog Hall is a masterpiece of Tudor-Gothic architecture. Four storeys of carved fireplaces, oak staircases, stone mullion windows, and arched doorways. Every room captures a different view of the valley—the Victorians understood how to frame beauty.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're restoring it all with the same attention to detail Steve brought to every pre-flight check. Because some things are too important to rush.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/sammy.png" 
                alt="Victorian manor detail" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Connection */}
      <section className="py-16 sm:py-24 px-4 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Mountain className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-serif mb-6">Centuries of Stories</h2>
          <p className="text-emerald-100 text-lg leading-relaxed mb-6">
            The history here runs deep. Old Dolfriog, south of our present house, was home to Gwen o'r Ddol, who inspired the famous cywyddau (Welsh poems) of Dafydd Nanmor. The Anwyl family held these lands until the mid-18th century. Victorian gentry built these halls. Post-war schoolchildren found adventure here, maybe even a young John Lennon among them.
          </p>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Now it's our turn to add to that story. And yours. Every guest who stays here becomes part of Dolfriog's continuing narrative—a narrative about finding peace, about reconnecting with nature, about discovering what matters. We're honored to be part of that tradition, and we can't wait to welcome you into it.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-emerald-900 mb-6">
            Come Find Your Own Story
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Whether you're gathering your family, seeking solitude with your partner, or answering the call of wild camping under dark skies, Dolfriog has space for you. We've learned that sometimes the best thing you can do is step away from everything and give yourself permission to just be. These mountains, these forests, this old Victorian manor—they're very good at creating that space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/booking" 
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Plan Your Visit
            </a>
            <a 
              href="/" 
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Explore Our Stays
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-serif text-white mb-2">Dolfriog Hall</h2>
          <p className="text-sm mb-4">Grade II-Listed Victorian Estate • Llanfrothen, Snowdonia</p>
          <p className="text-xs">Preserving Welsh heritage since 1830 • Welcoming you since 2024</p>
        </div>
      </footer>
    </div>
  );
}