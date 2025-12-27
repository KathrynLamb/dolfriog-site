// app/login/[[...rest]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="shadow-2xl rounded-2xl overflow-hidden">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-emerald-700 hover:bg-emerald-800 text-sm normal-case",
              footerActionLink: "text-emerald-700 hover:text-emerald-800",
              card: "shadow-none border-none"
            }
          }}
        />
      </div>
    </div>
  );
}