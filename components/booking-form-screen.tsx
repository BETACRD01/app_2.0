"use client"

import { useState } from "react"

export default function BookingFormScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [duration, setDuration] = useState(1)

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  const dates = [
    { date: "15", day: "Lun", full: "2024-01-15" },
    { date: "16", day: "Mar", full: "2024-01-16" },
    { date: "17", day: "Mié", full: "2024-01-17" },
    { date: "18", day: "Jue", full: "2024-01-18" },
    { date: "19", day: "Vie", full: "2024-01-19" },
    { date: "20", day: "Sáb", full: "2024-01-20" },
    { date: "21", day: "Dom", full: "2024-01-21" },
  ]

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center">
          <button className="p-2 -ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="flex-1 text-xl font-semibold text-gray-900 text-center mr-10">Reservar Servicio</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Service Info */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🧹</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Limpieza Profunda del Hogar</h3>
              <p className="text-sm text-gray-600">María González</p>
              <p className="text-sm font-semibold text-green-600">$15/hora</p>
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Fecha del Servicio</h2>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {dates.map((dateItem) => (
              <button
                key={dateItem.full}
                onClick={() => setSelectedDate(dateItem.full)}
                className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-colors ${
                  selectedDate === dateItem.full
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                <div className="text-xs font-medium">{dateItem.day}</div>
                <div className="text-lg font-bold">{dateItem.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Hora del Servicio</h2>
          {selectedDate ? (
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 rounded-xl text-center font-medium transition-colors ${
                    selectedTime === time ? "bg-green-600 text-white" : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <p className="text-gray-500 italic">Selecciona una fecha primero</p>
            </div>
          )}
        </div>

        {/* Duration Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Duración Estimada</h2>
          <div className="flex items-center bg-white rounded-xl border border-gray-200">
            <button
              onClick={() => duration > 1 && setDuration(duration - 1)}
              className="p-4 text-green-600 disabled:text-gray-300"
              disabled={duration <= 1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <div className="flex-1 text-center py-3">
              <span className="text-lg font-semibold text-gray-900">
                {duration} {duration === 1 ? "hora" : "horas"}
              </span>
            </div>
            <button
              onClick={() => duration < 8 && setDuration(duration + 1)}
              className="p-4 text-green-600 disabled:text-gray-300"
              disabled={duration >= 8}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-900 mb-2">Dirección del Servicio</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            rows={3}
            placeholder="Ingresa la dirección donde se realizará el servicio..."
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-900 mb-2">Notas Adicionales (Opcional)</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            rows={3}
            placeholder="Describe detalles específicos del trabajo..."
          />
        </div>

        {/* Price Summary */}
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Resumen de Precio</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Precio por hora</span>
              <span className="text-gray-900">$15.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                Duración ({duration} {duration === 1 ? "hora" : "horas"})
              </span>
              <span className="text-gray-900">x {duration}</span>
            </div>
            <div className="border-t border-gray-300 pt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-green-600 text-lg">${(15 * duration).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white border-t border-gray-200 p-4">
        <button
          className={`w-full py-3 rounded-xl font-semibold text-lg transition-colors ${
            selectedDate && selectedTime
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!selectedDate || !selectedTime}
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  )
}
