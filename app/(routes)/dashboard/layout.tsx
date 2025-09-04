// app/dashboard/layout.tsx
import { Providers } from "@/app/components/authentication/Providers"
import Navbar from "@/app/components/landingpage/Navbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </Providers>
  )
}
