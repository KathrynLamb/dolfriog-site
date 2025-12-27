import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import ical from 'node-ical';

// Initialize Database connection
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const AIRBNB_URL = process.env.AIRBNB_ICAL_URL;

    if (!AIRBNB_URL) {
      return NextResponse.json({ error: "No Airbnb URL found" }, { status: 500 });
    }

    // 1. Fetch the raw calendar data from Airbnb
    const response = await fetch(AIRBNB_URL);
    const text = await response.text();

    // 2. Parse the iCal data
    const events = ical.sync.parseICS(text);
    const newBookings = [];

    // 3. Loop through events and format them for Supabase
    for (const event of Object.values(events)) {
      if (event.type === 'VEVENT') {
        const startDate = event.start;
        const endDate = event.end;
        
        // Airbnb summary is usually "Reserved" or "Not available"
        // We can check if it's a past or future booking here if we want
        
        newBookings.push({
          start_date: startDate,
          end_date: endDate,
          guest_name: "Airbnb Guest", // iCal doesn't give names for privacy
          source: "airbnb",
          status: "confirmed",
          notes: event.summary,
        });
      }
    }

    // 4. Upsert (Update if exists, Insert if new) to Database
    // We use start_date as a rough unique constraint for this demo
    for (const booking of newBookings) {
      // Check if this date range already exists to avoid duplicates
      const { data: existing } = await supabase
        .from('bookings')
        .select('id')
        .eq('start_date', booking.start_date.toISOString())
        .single();

      if (!existing) {
        await supabase.from('bookings').insert({
            start_date: booking.start_date,
            end_date: booking.end_date,
            guest_name: booking.guest_name,
            source: booking.source,
            status: booking.status,
            notes: booking.notes
        });
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Synced ${newBookings.length} events from Airbnb` 
    });

  } catch (error) {
    console.error('Sync failed:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}