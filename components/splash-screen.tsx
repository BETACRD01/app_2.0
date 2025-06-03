"use client"

export default function SplashScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-32 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/3 right-12 w-12 h-12 bg-white/10 rounded-full"></div>

      {/* Logo */}
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-green-600">
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
      </div>

      {/* App Name */}
      <h1 className="text-white text-3xl font-bold text-center mb-4 tracking-wide">Mañachiy kan Kusata</h1>

      {/* Slogan */}
      <p className="text-white/80 text-lg text-center mb-16 px-8">Servicios del hogar en Napo</p>

      {/* Loading indicator */}
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-6"></div>

      <p className="text-white/70 text-base">Cargando...</p>
    </div>
  )
}
