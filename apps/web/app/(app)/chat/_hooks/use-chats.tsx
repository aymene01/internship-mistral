import { useState, useEffect } from 'react'
import { Chat, Message } from '../_components/chat'

export function useChats() {
  const [chats, setChats] = useState<Chat[]>(() => {
    const saved = localStorage.getItem('mistralChats')
    return saved ? JSON.parse(saved) : []
  })
  const [activeChat, setActiveChat] = useState<string>(() => localStorage.getItem('mistralActiveChat') || '')

  useEffect(() => {
    localStorage.setItem('mistralChats', JSON.stringify(chats))
  }, [chats])

  useEffect(() => {
    localStorage.setItem('mistralActiveChat', activeChat)
  }, [activeChat])

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      name: `New Chat ${chats.length + 1}`,
      messages: []
    }
    setChats(prevChats => [...prevChats, newChat])
    setActiveChat(newChat.id)
  }

  const renameChat = (chatId: string, newName: string) => {
    setChats(prevChats => prevChats.map(chat => 
      chat.id === chatId ? { ...chat, name: newName } : chat
    ))
  }

  const removeChat = (chatId: string) => {
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId))
    if (activeChat === chatId) {
      setActiveChat(chats[0]?.id || '')
    }
  }

  const addMessage = (chatId: string, message: Message) => {
    setChats(prevChats => prevChats.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, message] }
        : chat
    ))
  }

  return { chats, activeChat, setActiveChat, createNewChat, renameChat, removeChat, addMessage }
}