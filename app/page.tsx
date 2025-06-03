"use client"

import { useState } from "react"
import { MessageCircle, ArrowRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ChatListScreen from "@/components/chat-list-screen"
import ChatScreen from "@/components/chat-screen"

type ViewMode = "demo" | "chat-list" | "chat-conversation"

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewMode>("demo")

  const renderCurrentView = () => {
    switch (currentView) {
      case "chat-list":
        return (
          <div className="h-screen">
            <ChatListScreen />
          </div>
        )
      case "chat-conversation":
        return (
          <div className="h-screen">
            <ChatScreen />
          </div>
        )
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Mañachiy kan Kusata</h1>
                <p className="text-xl text-gray-600 mb-4">Sistema de Chat - Interfaces de Usuario</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Smartphone className="h-4 w-4" />
                  <span>Optimizado para móviles y escritorio</span>
                </div>
              </div>

              {/* Demo Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setCurrentView("chat-list")}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span>Lista de Conversaciones</span>
                    </CardTitle>
                    <CardDescription>
                      Vista principal con todas las conversaciones activas, búsqueda y filtros
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                            <span className="text-green-700 font-medium text-sm">MG</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sm">María González</span>
                              <span className="text-xs text-gray-500">10:30</span>
                            </div>
                            <p className="text-xs text-gray-600">¿A qué hora puedes venir mañana?</p>
                          </div>
                          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">2</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                            <span className="text-blue-700 font-medium text-sm">CM</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sm">Carlos Mendoza</span>
                              <span className="text-xs text-gray-500">09:15</span>
                            </div>
                            <p className="text-xs text-gray-600">Perfecto, nos vemos entonces</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Ver Lista Completa
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setCurrentView("chat-conversation")}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <span>Conversación Individual</span>
                    </CardTitle>
                    <CardDescription>
                      Chat en tiempo real con proveedores de servicios, con funciones avanzadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-2 shadow-sm max-w-xs">
                            <p className="text-sm">Hola, vi tu solicitud de servicio</p>
                            <span className="text-xs text-gray-500">10:00</span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-green-600 text-white rounded-lg p-2 max-w-xs">
                            <p className="text-sm">Sí, necesito limpieza mañana</p>
                            <div className="flex justify-end items-center space-x-1 mt-1">
                              <span className="text-xs text-green-100">10:02</span>
                              <span className="text-xs text-green-100">✓✓</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-2 shadow-sm max-w-xs">
                            <p className="text-sm">¿A qué hora te viene bien?</p>
                            <span className="text-xs text-gray-500">10:03</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Abrir Conversación
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Características del Sistema de Chat</CardTitle>
                  <CardDescription>Funcionalidades implementadas en las interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium mb-2">Mensajería en Tiempo Real</h3>
                      <p className="text-sm text-gray-600">
                        Envío y recepción instantánea de mensajes con indicadores de estado
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">👥</span>
                      </div>
                      <h3 className="font-medium mb-2">Gestión de Contactos</h3>
                      <p className="text-sm text-gray-600">
                        Lista organizada de proveedores y clientes con estado en línea
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 font-bold">🔧</span>
                      </div>
                      <h3 className="font-medium mb-2">Integración de Servicios</h3>
                      <p className="text-sm text-gray-600">
                        Información contextual sobre reservas y servicios en el chat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Haz clic en las tarjetas de arriba para explorar las interfaces</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" onClick={() => setCurrentView("chat-list")}>
                    Ver Lista de Chats
                  </Button>
                  <Button variant="outline" onClick={() => setCurrentView("chat-conversation")}>
                    Ver Conversación
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative">
      {renderCurrentView()}

      {/* Back to Demo Button */}
      {currentView !== "demo" && (
        <div className="fixed top-4 left-4 z-50">
          <Button onClick={() => setCurrentView("demo")} variant="secondary" className="shadow-lg">
            ← Volver al Demo
          </Button>
        </div>
      )}
    </div>
  )
}
