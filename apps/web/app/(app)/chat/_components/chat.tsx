'use client'

import { useState, useEffect } from 'react'
import { Mistral } from "@mistralai/mistralai"
import { ChatSidebar } from './chat-sidebar'
import { ChatHeader } from './chat-header'
import { ChatMessages } from './chat-messages'
import { ChatInput } from './chat-input'
import { RenameDialog } from './rename-dialog'
import { WelcomeDialog } from './welcome-dialog'
import { useChats } from '../_hooks/use-chats'
import { useChatCompletion } from '../_hooks/use-chat-completion'
import { EmptyState } from './empty-state'

const mistral = new Mistral({
  apiKey: process.env.NEXT_PUBLIC_MISTRAL_API_KEY ?? "",
})

export type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export type Chat = {
  id: string
  name: string
  messages: Message[]
}

export default function UltimateChat() {
  const { chats, activeChat, setActiveChat, createNewChat, renameChat, removeChat, addMessage } = useChats()
  const { loading, getChatCompletion } = useChatCompletion(mistral)
  const [input, setInput] = useState('')
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false)
  const [chatToRename, setChatToRename] = useState<Chat | null>(null)
  const [newChatName, setNewChatName] = useState('')
  const [isWelcomeDialogOpen, setIsWelcomeDialogOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedMistralChat')
    if (!hasVisited) {
      setIsWelcomeDialogOpen(true)
      localStorage.setItem('hasVisitedMistralChat', 'true')
    }
  }, [])

  const handleSend = async () => {
    if (input.trim() === '' || loading) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input }
    addMessage(activeChat, userMessage)
    setInput('')

    try {
      const aiResponse = await getChatCompletion({ content: input })
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: aiResponse ?? 'No response' }
      addMessage(activeChat, aiMessage)
    } catch (error) {
      console.error('Error getting chat completion:', error)
      const errorMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      addMessage(activeChat, errorMessage)
    }
  }

  const openRenameDialog = (chat: Chat) => {
    setChatToRename(chat)
    setNewChatName(chat.name)
    setIsRenameDialogOpen(true)
  }

  const handleRename = () => {
    if (chatToRename && newChatName.trim() !== '') {
      renameChat(chatToRename.id, newChatName.trim())
      setIsRenameDialogOpen(false)
    }
  }

  return (
    <div className="w-full min-h-screen flex bg-white text-gray-900">
      <ChatSidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        createNewChat={createNewChat}
        openRenameDialog={openRenameDialog}
        removeChat={removeChat}
      />

      <div className="flex-1 flex flex-col">
        {chats.length === 0 ? (
            <EmptyState createNewChat={createNewChat}/>
        ) : (
          <>
            <ChatHeader title={chats.find(chat => chat.id === activeChat)?.name || 'New Chat'} />

            <ChatMessages
              messages={chats.find(chat => chat.id === activeChat)?.messages || []}
              loading={loading}
            />

            <ChatInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              loading={loading}
            />
          </>
        )}
      </div>

      <RenameDialog
        isOpen={isRenameDialogOpen}
        onOpenChange={setIsRenameDialogOpen}
        newChatName={newChatName}
        setNewChatName={setNewChatName}
        handleRename={handleRename}
      />

      <WelcomeDialog
        isOpen={isWelcomeDialogOpen}
        onOpenChange={setIsWelcomeDialogOpen}
      />
    </div>
  )
}