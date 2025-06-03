"use client"

export default function ServiceDetailScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header with Image */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
          <div className="text-6xl">🧹</div>
        </div>

        {/* Back Button */}
        <button className="absolute top-12 left-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Share Button */}
        <button className="absolute top-12 right-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
            <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Service Info */}
        <div className="bg-white p-6 -mt-6 mx-4 rounded-t-3xl shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Limpieza Profunda del Hogar</h1>
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-lg font-semibold text-gray-900 ml-1">4.8</span>
                <span className="text-gray-600 ml-1">(24 reseñas)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">$15</div>
              <div className="text-sm text-gray-500">por hora</div>
            </div>
          </div>

          <div className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
            Limpieza
          </div>
        </div>

        {/* Description */}
        <div className="bg-white mx-4 p-6 mt-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Descripción</h2>
          <p className="text-gray-600 leading-relaxed">
            Servicio completo de limpieza profunda para tu hogar. Incluye limpieza de todas las habitaciones, baños,
            cocina, y áreas comunes. Utilizamos productos ecológicos y seguros para toda la familia.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Eco-friendly</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Productos seguros</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Servicio completo</span>
          </div>
        </div>

        {/* Provider Info */}
        <div className="bg-white mx-4 p-6 mt-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Información del Proveedor</h2>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">MG</span>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-gray-900">María González</h3>
              <p className="text-gray-600 text-sm">Proveedor de servicios</p>
              <div className="flex items-center mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-sm text-gray-500 ml-1">Tena, Napo</span>
              </div>
            </div>
            <button className="p-3 bg-green-100 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white mx-4 p-6 mt-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Calificaciones y Reseñas</h2>
            <button className="text-green-600 font-medium">Ver todas</button>
          </div>

          <div className="flex items-center mb-4">
            <div className="text-center mr-6">
              <div className="text-3xl font-bold text-gray-900">4.8</div>
              <div className="flex justify-center my-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500">24 reseñas</div>
            </div>

            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center mb-1">
                  <span className="text-sm w-2">{stars}</span>
                  <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: stars >= 4 ? "80%" : "20%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white mx-4 p-6 mt-4 rounded-xl shadow-sm mb-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Detalles del Servicio</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-gray-600 ml-3">Duración estimada</span>
              </div>
              <span className="font-semibold text-gray-900">60 minutos</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-gray-600 ml-3">Disponibilidad</span>
              </div>
              <span className="font-semibold text-green-600">Disponible</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-gray-600 ml-3">Fecha de registro</span>
              </div>
              <span className="font-semibold text-gray-900">15/01/2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="text-sm text-gray-500">Precio por hora</div>
            <div className="text-xl font-bold text-green-600">$15</div>
          </div>
          <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            Reservar Servicio
          </button>
        </div>
      </div>
    </div>
  )
}
