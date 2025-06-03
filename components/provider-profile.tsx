"use client"

import { useState } from "react"

export default function ProviderProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Mi Negocio</h1>
          <button onClick={() => setIsEditing(!isEditing)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Business Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl font-bold">CA</span>
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Centro de Masajes Amazonia</h2>
          <p className="text-gray-600">maria.gonzalez@email.com</p>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 ml-1">4.8</span>
              <span className="text-sm text-gray-500 ml-1">(124 reseñas)</span>
            </div>
          </div>
          <div className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full mt-2">
            Proveedor Verificado
          </div>
        </div>

        {/* Business Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">5</p>
            <p className="text-sm text-gray-500">Servicios</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600">124</p>
            <p className="text-sm text-gray-500">Clientes</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-bold text-purple-600">2</p>
            <p className="text-sm text-gray-500">Años</p>
          </div>
        </div>

        {/* Business Info */}
        {isEditing ? (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Negocio</label>
              <input
                type="text"
                defaultValue="Centro de Masajes Amazonia"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                defaultValue="Especialistas en masajes terapéuticos y relajantes con técnicas ancestrales amazónicas. Más de 2 años brindando bienestar y salud."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input
                type="tel"
                defaultValue="0987654321"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input
                type="text"
                defaultValue="Av. 15 de Noviembre 123, Tena"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Horarios de Atención</label>
              <input
                type="text"
                defaultValue="Lun-Vie: 8:00-18:00, Sáb: 9:00-15:00"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-xl font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold"
              >
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
              <p className="text-gray-600 text-sm">
                Especialistas en masajes terapéuticos y relajantes con técnicas ancestrales amazónicas. Más de 2 años
                brindando bienestar y salud.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path
                    d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 21.7893 20.5304 21 20 21C15.0294 21 10.196 19.206 6.51472 15.5147C2.83344 11.8235 1.03999 6.99011 1.03999 2C1.03999 1.46957 1.25071 0.960859 1.62578 0.585786C2.00086 0.210714 2.50957 0 3.03999 0H5.11C5.59599 -0.00375969 6.06313 0.174038 6.42099 0.498653C6.77885 0.823268 7.00199 1.26956 7.04999 1.75C7.13999 2.71 7.33999 3.65 7.63999 4.55C7.78013 4.98792 7.77067 5.46177 7.61329 5.89361C7.45591 6.32546 7.15999 6.68796 6.77999 6.92L5.74999 7.57C7.06999 10.76 9.23999 12.93 12.43 14.25L13.08 13.22C13.312 12.84 13.6745 12.5441 14.1064 12.3867C14.5382 12.2293 15.0121 12.2199 15.45 12.36C16.35 12.66 17.29 12.86 18.25 12.95C18.7405 12.998 19.1868 13.2211 19.5114 13.579C19.836 13.9368 20.0138 14.404 20.01 14.89L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-semibold text-gray-900">0987654321</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p className="font-semibold text-gray-900">Av. 15 de Noviembre 123, Tena</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-500">Horarios</p>
                  <p className="font-semibold text-gray-900">Lun-Vie: 8:00-18:00</p>
                  <p className="font-semibold text-gray-900">Sáb: 9:00-15:00</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Options */}
        {!isEditing && (
          <div className="space-y-3 mb-6">
            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path
                    d="M9 19C9 19.5304 9.21071 20.0391 9.58579 20.4142C9.96086 20.7893 10.4696 21 11 21H13C13.5304 21 14.0391 20.7893 14.4142 20.4142C14.7893 20.0391 15 19.5304 15 19V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H11C10.4696 3 9.96086 3.21071 9.58579 3.58579C9.21071 3.96086 9 4.46957 9 5V19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H9V19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15V19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="ml-4 font-medium text-gray-900">Configurar Horarios</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ml-4 font-medium text-gray-900">Métodos de Pago</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="ml-4 font-medium text-gray-900">Reportes</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-4 font-medium text-gray-900">Ayuda y Soporte</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Logout Button */}
        {!isEditing && (
          <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="16,17 21,12 16,7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="21"
                y1="12"
                x2="9"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Cerrar Sesión
          </button>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Agenda</span>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs text-green-600 font-medium mt-1">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}
