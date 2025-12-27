// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Run middleware on all routes except Next.js internals & static files
    "/((?!_next|.*\\..*).*)",
  ],
};
