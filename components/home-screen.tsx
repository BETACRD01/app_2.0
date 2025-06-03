"use client"

export default function HomeScreen() {
  const services = [
    { name: "Limpieza", icon: "🧹", color: "bg-blue-100 text-blue-600" },
    { name: "Plomería", icon: "🔧", color: "bg-orange-100 text-orange-600" },
    { name: "Electricidad", icon: "⚡", color: "bg-yellow-100 text-yellow-600" },
    { name: "Carpintería", icon: "🔨", color: "bg-purple-100 text-purple-600" },
    { name: "Jardinería", icon: "🌱", color: "bg-green-100 text-green-600" },
    { name: "Otros", icon: "⚙️", color: "bg-gray-100 text-gray-600" },
  ]

  const popularServices = [
    { name: "Limpieza Profunda", provider: "María González", rating: 4.8, price: 15, image: "🧹" },
    { name: "Reparación Plomería", provider: "Carlos Ruiz", rating: 4.9, price: 25, image: "🔧" },
    { name: "Instalación Eléctrica", provider: "Luis Pérez", rating: 4.7, price: 30, image: "⚡" },
  ]

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">¡Hola, Usuario!</h1>
            <p className="text-gray-600 mt-1">¿Qué servicio necesitas hoy?</p>
          </div>
          <button className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path
                d="M18 8A6 6 0 0 0 6 8C6 7 6 6 6 6S6 7 6 8C6 10.3 7.7 12 10 12H14C16.3 12 18 10.3 18 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21A2 2 0 0 1 12 22A2 2 0 0 1 10.27 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-green-500"
            placeholder="Buscar servicios..."
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Categories */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Categorías</h2>
            <button className="text-green-600 font-medium">Ver todas</button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <span className="text-sm font-medium text-gray-900">{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Servicios Populares</h2>
            <button className="text-green-600 font-medium">Ver todos</button>
          </div>

          <div className="space-y-4">
            {popularServices.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    {service.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.provider}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium text-gray-900 ml-1">{service.rating}</span>
                      </div>
                      <span className="text-green-600 font-bold ml-auto">${service.price}/h</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Providers */}
        <div className="px-6 pb-20">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Proveedores Destacados</h2>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">👥</div>
            <p className="text-gray-600 italic">Proveedores destacados próximamente</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-green-600 font-medium mt-1">Inicio</span>
          </button>

          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Buscar</span>
          </button>

          <button className="flex flex-col items-center py-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-400 mt-1">Reservas</span>
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
