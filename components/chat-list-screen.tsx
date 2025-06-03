"use client"

import { useState } from "react"
import { Search, MessageCircle, MoreVertical, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
  isProvider: boolean
}

const mockChats: Chat[] = [
  {
    id: "1",
    name: "María González",
    avatar: "/placeholder.svg?height=40&width=40&text=MG",
    lastMessage: "¿A qué hora puedes venir mañana?",
    timestamp: "10:30",
    unreadCount: 2,
    isOnline: true,
    isProvider: true,
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    avatar: "/placeholder.svg?height=40&width=40&text=CM",
    lastMessage: "Perfecto, nos vemos entonces",
    timestamp: "09:15",
    unreadCount: 0,
    isOnline: false,
    isProvider: true,
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    avatar: "/placeholder.svg?height=40&width=40&text=AR",
    lastMessage: "Gracias por el excelente servicio",
    timestamp: "Ayer",
    unreadCount: 1,
    isOnline: true,
    isProvider: false,
  },
  {
    id: "4",
    name: "Luis Pérez",
    avatar: "/placeholder.svg?height=40&width=40&text=LP",
    lastMessage: "¿Cuánto costaría el servicio completo?",
    timestamp: "Ayer",
    unreadCount: 0,
    isOnline: false,
    isProvider: true,
  },
  {
    id: "5",
    name: "Carmen Silva",
    avatar: "/placeholder.svg?height=40&width=40&text=CS",
    lastMessage: "Muchas gracias, todo quedó perfecto",
    timestamp: "2 días",
    unreadCount: 0,
    isOnline: true,
    isProvider: false,
  },
]

export default function ChatListScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  const filteredChats = mockChats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Mensajes</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar conversaciones..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <MessageCircle className="h-16 w-16 mb-4" />
            <p className="text-lg font-medium">No hay conversaciones</p>
            <p className="text-sm">Inicia una conversación con un proveedor</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 hover:bg-gray-100 cursor-pointer transition-colors ${
                  selectedChat === chat.id ? "bg-green-50 border-r-4 border-green-600" : ""
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                      <AvatarFallback className="bg-green-100 text-green-700">
                        {chat.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {chat.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900 truncate">{chat.name}</p>
                        {chat.isProvider && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                            Proveedor
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-gray-500">{chat.timestamp}</p>
                        {chat.unreadCount > 0 && (
                          <Badge className="bg-green-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                            {chat.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
                  </div>

                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-green-600">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-600">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6">
        <Button className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
