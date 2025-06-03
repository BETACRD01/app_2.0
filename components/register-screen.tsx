"use client"

import { useState } from "react"

export default function RegisterScreen() {
  const [userType, setUserType] = useState<"client" | "provider">("client")

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 flex items-center">
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
        <h1 className="flex-1 text-xl font-semibold text-gray-900 text-center mr-10">Crear Cuenta</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Únete a nuestra comunidad</h2>
          <p className="text-gray-600">Completa tus datos para comenzar</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Usuario</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setUserType("client")}
              className={`p-4 rounded-xl border-2 transition-all ${
                userType === "client" ? "border-green-600 bg-green-50" : "border-gray-300 bg-white"
              }`}
            >
              <div className="flex flex-col items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={userType === "client" ? "text-green-600" : "text-gray-400"}
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span
                  className={`text-sm font-medium mt-2 ${userType === "client" ? "text-green-600" : "text-gray-600"}`}
                >
                  Cliente
                </span>
                <span className="text-xs text-gray-500 text-center mt-1">Busco servicios para mi hogar</span>
              </div>
            </button>

            <button
              onClick={() => setUserType("provider")}
              className={`p-4 rounded-xl border-2 transition-all ${
                userType === "provider" ? "border-green-600 bg-green-50" : "border-gray-300 bg-white"
              }`}
            >
              <div className="flex flex-col items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={userType === "provider" ? "text-green-600" : "text-gray-400"}
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`text-sm font-medium mt-2 ${userType === "provider" ? "text-green-600" : "text-gray-600"}`}
                >
                  Proveedor
                </span>
                <span className="text-xs text-gray-500 text-center mt-1">Ofrezco servicios domésticos</span>
              </div>
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="0987654321"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Tu dirección"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Tena, Archidona, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-8 mb-6">
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors">
            Registrarse
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center pb-6">
          <span className="text-gray-600">¿Ya tienes cuenta? </span>
          <button className="text-green-600 font-medium">Inicia sesión</button>
        </div>
      </div>
    </div>
  )
}
