"use client"

import { useState } from "react"

export default function ProviderBookings() {
  const [selectedTab, setSelectedTab] = useState("pending")

  const bookings = {
    pending: [
      {
        id: 1,
        client: "Juan Pérez",
        service: "Masaje Relajante",
        date: "Hoy",
        time: "2:00 PM - 3:00 PM",
        price: 30,
        avatar: "JP",
        color: "bg-blue-600",
      },
      {
        id: 2,
        client: "Ana Morales",
        service: "Masaje Terapéutico",
        date: "Mañana",
        time: "10:00 AM - 11:30 AM",
        price: 45,
        avatar: "AM",
        color: "bg-purple-600",
      },
    ],
    confirmed: [
      {
        id: 3,
        client: "Carlos Ruiz",
        service: "Reflexología",
        date: "Hoy",
        time: "4:00 PM - 4:45 PM",
        price: 25,
        avatar: "CR",
        color: "bg-green-600",
      },
    ],
    completed: [
      {
        id: 4,
        client: "María López",
        service: "Masaje Relajante",
        date: "Ayer",
        time: "11:00 AM - 12:00 PM",
        price: 30,
        avatar: "ML",
        color: "bg-orange-600",
      },
    ],
  }

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Reservas</h1>
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setSelectedTab("pending")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedTab === "pending" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            Pendientes ({bookings.pending.length})
          </button>
          <button
            onClick={() => setSelectedTab("confirmed")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedTab === "confirmed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            Confirmadas ({bookings.confirmed.length})
          </button>
          <button
            onClick={() => setSelectedTab("completed")}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedTab === "completed" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            Completadas ({bookings.completed.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-yellow-600">{bookings.pending.length}</p>
            <p className="text-sm text-gray-500">Pendientes</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">{bookings.confirmed.length}</p>
            <p className="text-sm text-gray-500">Confirmadas</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">{bookings.completed.length}</p>
            <p className="text-sm text-gray-500">Completadas</p>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings[selectedTab].map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${booking.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{booking.avatar}</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{booking.client}</h3>
                    <p className="text-sm text-gray-500">{booking.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">${booking.price}</p>
                  {selectedTab === "pending" && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                      Pendiente
                    </span>
                  )}
                  {selectedTab === "confirmed" && (
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                      Confirmado
                    </span>
                  )}
                  {selectedTab === "completed" && (
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      Completado
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {booking.date}, {booking.time}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                {selectedTab === "pending" && (
                  <>
                    <button className="flex-1 border-2 border-red-200 text-red-600 py-2 rounded-lg text-sm font-medium">
                      Rechazar
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                      Confirmar
                    </button>
                  </>
                )}
                {selectedTab === "confirmed" && (
                  <>
                    <button className="flex-1 border-2 border-blue-200 text-blue-600 py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
                        <path
                          d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Chat
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                      Completar
                    </button>
                  </>
                )}
                {selectedTab === "completed" && (
                  <button className="w-full border-2 border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium">
                    Ver Detalles
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {bookings[selectedTab].length === 0 && (
          <div className="text-center py-12">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto text-gray-300 mb-4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-gray-500 text-lg font-medium">No hay reservas</p>
            <p className="text-gray-400 text-sm">Las reservas aparecerán aquí</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Inicio</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs text-green-600 font-medium mt-1">Agenda</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path
                d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Servicios</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}
