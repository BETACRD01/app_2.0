"use client"

import { useState } from "react"

export default function ServiceListScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Limpieza", "Plomería", "Electricidad", "Carpintería", "Jardinería"]

  const services = [
    {
      id: 1,
      name: "Limpieza Profunda del Hogar",
      provider: "María González",
      category: "Limpieza",
      rating: 4.8,
      reviews: 24,
      price: 15,
      description: "Servicio completo de limpieza para tu hogar",
      image: "🧹",
    },
    {
      id: 2,
      name: "Reparación de Tuberías",
      provider: "Carlos Ruiz",
      category: "Plomería",
      rating: 4.9,
      reviews: 18,
      price: 25,
      description: "Reparación y mantenimiento de sistemas de plomería",
      image: "🔧",
    },
    {
      id: 3,
      name: "Instalación Eléctrica",
      provider: "Luis Pérez",
      category: "Electricidad",
      rating: 4.7,
      reviews: 31,
      price: 30,
      description: "Instalación y reparación de sistemas eléctricos",
      image: "⚡",
    },
    {
      id: 4,
      name: "Muebles a Medida",
      provider: "Ana Torres",
      category: "Carpintería",
      rating: 4.6,
      reviews: 12,
      price: 35,
      description: "Fabricación de muebles personalizados",
      image: "🔨",
    },
  ]

  return (
    <div className="w-[375px] h-[812px] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center mb-4">
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
          <h1 className="flex-1 text-xl font-semibold text-gray-900 text-center mr-10">Servicios</h1>
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <polygon
                points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Buscar servicios..."
          />
        </div>

        {/* Category Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Service Image */}
                  <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {service.image}
                  </div>

                  {/* Service Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base leading-tight">{service.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.provider}</p>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-lg font-bold text-green-600">${service.price}</div>
                        <div className="text-xs text-gray-500">por hora</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{service.description}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                          {service.category}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium text-gray-900 ml-1">{service.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
