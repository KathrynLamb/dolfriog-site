import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import ical from 'node-ical';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST() {
  try {
    const AIRBNB_URL = process.env.AIRBNB_ICAL_URL;

    if (!AIRBNB_URL) {
      return NextResponse.json({ error: "No Airbnb URL found" }, { status: 500 });
    }

    // 1. Fetch the raw calendar data
    const response = await fetch(AIRBNB_URL);
    const text = await response.text();

    // 2. Parse the iCal data
    const events = ical.sync.parseICS(text);
    const newBookings = [];

    // 3. Loop through events and format them
    for (const event of Object.values(events)) {
      if (event.type === 'VEVENT') {
        // Convert to ISO string for consistent storage
        const startDate = new Date(event.start).toISOString();
        const endDate = new Date(event.end).toISOString();
        
        newBookings.push({
          start_date: startDate,
          end_date: endDate,
          guest_name: "Airbnb Guest",
          source: "airbnb",
          status: "confirmed",
          guests: 0, // Add default value
          notes: event.summary || "",
        });
      }
    }

    console.log(`Processing ${newBookings.length} bookings...`);

    // 4. Upsert to Database
    let inserted = 0;
    let skipped = 0;

    for (const booking of newBookings) {
      const { data: existing } = await supabase
        .from('bookings')
        .select('id')
        .eq('start_date', booking.start_date)
        .single();

      if (!existing) {
        const { error } = await supabase
          .from('bookings')
          .insert(booking);
        
        if (error) {
          console.error('Insert error:', error);
        } else {
          inserted++;
        }
      } else {
        skipped++;
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Synced ${newBookings.length} events: ${inserted} new, ${skipped} already existed` 
    });

  } catch (error) {
    console.error('Sync failed:', error);
    return NextResponse.json({ 
      error: 'Sync failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}