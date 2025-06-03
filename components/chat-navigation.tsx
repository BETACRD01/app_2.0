"use client"

import { useState } from "react"
import { MessageCircle, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ChatListScreen from "./chat-list-screen"
import ChatScreen from "./chat-screen"

type ChatView = "list" | "conversation" | "groups" | "settings"

export default function ChatNavigation() {
  const [currentView, setCurrentView] = useState<ChatView>("list")

  const renderCurrentView = () => {
    switch (currentView) {
      case "list":
        return <ChatListScreen />
      case "conversation":
        return <ChatScreen />
      case "groups":
        return (
          <div className="flex items-center justify-center h-screen">
            <p className="text-gray-500">Grupos - Próximamente</p>
          </div>
        )
      case "settings":
        return (
          <div className="flex items-center justify-center h-screen">
            <p className="text-gray-500">Configuración de chat</p>
          </div>
        )
      default:
        return <ChatListScreen />
    }
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1">{renderCurrentView()}</div>

      {/* Bottom Navigation for Chat */}
      {currentView !== "conversation" && (
        <div className="bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around">
            <Button
              variant={currentView === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("list")}
              className="flex flex-col items-center space-y-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">Chats</span>
            </Button>

            <Button
              variant={currentView === "groups" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("groups")}
              className="flex flex-col items-center space-y-1"
            >
              <Users className="h-4 w-4" />
              <span className="text-xs">Grupos</span>
            </Button>

            <Button
              variant={currentView === "settings" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView("settings")}
              className="flex flex-col items-center space-y-1"
            >
              <Settings className="h-4 w-4" />
              <span className="text-xs">Config</span>
            </Button>
          </div>
        </div>
      )}

      {/* Demo Navigation */}
      <div className="bg-gray-100 p-2 border-t">
        <div className="flex justify-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setCurrentView("list")}>
            Lista de Chats
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCurrentView("conversation")}>
            Conversación
          </Button>
        </div>
      </div>
    </div>
  )
}
