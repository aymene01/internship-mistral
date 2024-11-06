'use client'

import { useState, useEffect, useRef } from 'react'
import { signOut, useSession } from "@repo/auth/react"
import { Button } from "@repo/design-system/components/ui/button"
import { Input } from "@repo/design-system/components/ui/input"
import { ScrollArea } from "@repo/design-system/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/design-system/components/ui/avatar"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@repo/design-system/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/design-system/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@repo/design-system/components/ui/dialog"
import { Moon, Sun, Send, Loader2, Plus, MessageSquare, MoreVertical, Edit, Trash } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type Chat = {
  id: string
  name: string
  messages: Message[]
}

export default function UltimateChat() {
  const [chats, setChats] = useState<Chat[]>([{ id: '1', name: 'New Chat', messages: [] }])
  const [activeChat, setActiveChat] = useState<string>('1')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false)
  const [chatToRename, setChatToRename] = useState<Chat | null>(null)
  const [newChatName, setNewChatName] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [chats])

  const handleSend = async () => {
    if (input.trim() === '') return

    const newMessage: Message = { id: Date.now().toString(), role: 'user', content: input }
    setChats(prevChats => prevChats.map(chat => 
      chat.id === activeChat 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ))
    setInput('')
    setLoading(true)

    // Simulating AI response
    setTimeout(() => {
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: 'This is a simulated AI response.' }
      setChats(prevChats => prevChats.map(chat => 
        chat.id === activeChat 
          ? { ...chat, messages: [...chat.messages, aiMessage] }
          : chat
      ))
      setLoading(false)
    }, 1000)
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      name: `New Chat ${chats.length + 1}`,
      messages: []
    }
    setChats(prevChats => [...prevChats, newChat])
    setActiveChat(newChat.id)
  }

  const openRenameDialog = (chat: Chat) => {
    setChatToRename(chat)
    setNewChatName(chat.name)
    setIsRenameDialogOpen(true)
  }

  const handleRename = () => {
    if (chatToRename && newChatName.trim() !== '') {
      setChats(prevChats => prevChats.map(chat => 
        chat.id === chatToRename.id ? { ...chat, name: newChatName.trim() } : chat
      ))
      setIsRenameDialogOpen(false)
    }
  }

  const removeChat = (chatId: string) => {
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId))
    if (activeChat === chatId) {
      setActiveChat(chats[0]?.id || '')
    }
  }

  return (
    <div className={`w-full min-h-screen flex transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'}`}>
      <Sidebar className="w-64 border-r border-gray-200 dark:border-gray-700">
        <SidebarHeader className="p-4">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-text-shimmer">
            Mistral Chat
          </h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={createNewChat} className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                New Chat
              </SidebarMenuButton>
            </SidebarMenuItem>
            {chats.map((chat) => (
              <SidebarMenuItem key={chat.id}>
                <div className="flex items-center w-full">
                  <SidebarMenuButton 
                    onClick={() => setActiveChat(chat.id)} 
                    className={`flex-grow justify-start ${activeChat === chat.id ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span className="flex-grow text-left truncate">{chat.name}</span>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="ml-auto px-2">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white' align="end">
                      <DropdownMenuItem onClick={() => openRenameDialog(chat)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => removeChat(chat.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
          <ProfileSection />
        </div>
      </Sidebar>

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">
            {chats.find(chat => chat.id === activeChat)?.name}
          </h2>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </header>

        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <AnimatePresence initial={false}>
            {chats.find(chat => chat.id === activeChat)?.messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div className={`flex items-end space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{message.role === 'user' ? 'U' : 'AI'}</AvatarFallback>
                    <AvatarImage src={message.role === 'user' ? '/user-avatar.png' : '/ai-avatar.png'} />
                  </Avatar>
                  <div className={`p-3 rounded-2xl max-w-md ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-end space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="/ai-avatar.png" />
                </Avatar>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <Loader2 className="h-5 w-5 animate-spin text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </motion.div>
          )}
        </ScrollArea>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <Button onClick={handleSend} disabled={loading} className="rounded-full">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Rename Chat</DialogTitle>
            <DialogDescription>
              Enter a new name for the chat.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
            placeholder="Enter new chat name"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRenameDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRename}>
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ProfileSection() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="w-10 h-10">
        <AvatarFallback>{session?.user?.name?.[0] ?? 'U'}</AvatarFallback>
        <AvatarImage src={session?.user?.image ?? '/user-avatar.png'} />
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{session?.user?.name ?? 'User'}</span>
        <Button variant="ghost" size="sm" className="justify-start px-0 text-gray-600 font-semibold" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </div>
  )
}