import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Identify if the user is trying to access the admin panel
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  // 2. TEMPORARY: Simulate authentication
  // Set this to 'true' so you can see your design. 
  // Later, we will connect this to Clerk/Supabase Auth.
  const isAuthenticated = true; 

  // 3. If they are trying to go to Admin but aren't logged in, kick them out
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// 4. Tell Next.js to only run this check on admin routes (optimizes performance)
export const config = {
  matcher: '/admin/:path*',
}