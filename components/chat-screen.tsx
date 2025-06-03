"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Phone, Video, MoreVertical, Send, Paperclip, Smile, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  text: string
  timestamp: string
  isOwn: boolean
  status: "sent" | "delivered" | "read"
  type: "text" | "image" | "service"
}

interface ChatUser {
  id: string
  name: string
  avatar: string
  isOnline: boolean
  isProvider: boolean
  service?: string
}

const mockUser: ChatUser = {
  id: "1",
  name: "María González",
  avatar: "/placeholder.svg?height=40&width=40&text=MG",
  isOnline: true,
  isProvider: true,
  service: "Limpieza del hogar",
}

const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hola, vi tu solicitud de servicio de limpieza",
    timestamp: "10:00",
    isOwn: false,
    status: "read",
    type: "text",
  },
  {
    id: "2",
    text: "Hola María, sí necesito limpieza para mañana",
    timestamp: "10:02",
    isOwn: true,
    status: "read",
    type: "text",
  },
  {
    id: "3",
    text: "Perfecto, ¿a qué hora te viene bien?",
    timestamp: "10:03",
    isOwn: false,
    status: "read",
    type: "text",
  },
  {
    id: "4",
    text: "¿Podrías venir a las 2 PM?",
    timestamp: "10:05",
    isOwn: true,
    status: "read",
    type: "text",
  },
  {
    id: "5",
    text: "Claro, sin problema. El costo sería S/. 80 por 4 horas",
    timestamp: "10:07",
    isOwn: false,
    status: "read",
    type: "text",
  },
  {
    id: "6",
    text: "Perfecto, ¿necesitas que proporcione algo?",
    timestamp: "10:10",
    isOwn: true,
    status: "delivered",
    type: "text",
  },
]

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
        status: "sent",
        type: "text",
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return "✓"
      case "delivered":
        return "✓✓"
      case "read":
        return "✓✓"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
              <AvatarFallback className="bg-green-100 text-green-700">
                {mockUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {mockUser.isOnline && (
              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h2 className="font-medium">{mockUser.name}</h2>
              {mockUser.isProvider && (
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                  Proveedor
                </Badge>
              )}
            </div>
            <p className="text-sm text-green-100">{mockUser.isOnline ? "En línea" : "Última vez hace 5 min"}</p>
            {mockUser.service && <p className="text-xs text-green-200">{mockUser.service}</p>}
          </div>

          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isOwn ? "bg-green-600 text-white" : "bg-white text-gray-900 shadow-sm border"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={`flex items-center justify-end space-x-1 mt-1 ${
                  message.isOwn ? "text-green-100" : "text-gray-500"
                }`}
              >
                <span className="text-xs">{message.timestamp}</span>
                {message.isOwn && (
                  <span className={`text-xs ${message.status === "read" ? "text-blue-200" : "text-green-200"}`}>
                    {getStatusIcon(message.status)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 shadow-sm border px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Service Info Banner */}
      <div className="bg-blue-50 border-t border-blue-200 p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-900">Servicio: Limpieza del hogar</p>
            <p className="text-xs text-blue-700">Fecha: Mañana 2:00 PM • Precio: S/. 80</p>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Ver detalles
          </Button>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
            <Camera className="h-5 w-5" />
          </Button>

          <div className="flex-1 relative">
            <Input
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
