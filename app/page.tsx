"use client"

import { useState } from "react"
import ProviderDashboard from "@/components/provider-dashboard"
import ProviderServices from "@/components/provider-services"
import ProviderBookings from "@/components/provider-bookings"
import ProviderProfile from "@/components/provider-profile"

export default function ProviderApp() {
  const [currentScreen, setCurrentScreen] = useState("dashboard")

  const screens = {
    dashboard: <ProviderDashboard />,
    services: <ProviderServices />,
    bookings: <ProviderBookings />,
    profile: <ProviderProfile />,
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative">
        {screens[currentScreen]}

        {/* Navigation Controls */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            onClick={() => setCurrentScreen("dashboard")}
            className={`px-3 py-1 rounded text-sm ${
              currentScreen === "dashboard" ? "bg-green-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentScreen("services")}
            className={`px-3 py-1 rounded text-sm ${
              currentScreen === "services" ? "bg-green-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            Servicios
          </button>
          <button
            onClick={() => setCurrentScreen("bookings")}
            className={`px-3 py-1 rounded text-sm ${
              currentScreen === "bookings" ? "bg-green-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            Reservas
          </button>
          <button
            onClick={() => setCurrentScreen("profile")}
            className={`px-3 py-1 rounded text-sm ${
              currentScreen === "profile" ? "bg-green-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            Perfil
          </button>
        </div>
      </div>
    </div>
  )
}
