import { Button } from "@repo/design-system/components/ui/button"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@repo/design-system/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/design-system/components/ui/dropdown-menu"
import { Plus, MessageSquare, MoreVertical, Edit, Trash } from "lucide-react"
import { ProfileSection } from './profile-section'
import { Chat } from './chat'

type ChatSidebarProps = {
  chats: Chat[]
  activeChat: string
  setActiveChat: (chatId: string) => void
  createNewChat: () => void
  openRenameDialog: (chat: Chat) => void
  removeChat: (chatId: string) => void
}

export function ChatSidebar({ chats, activeChat, setActiveChat, createNewChat, openRenameDialog, removeChat }: ChatSidebarProps) {
  return (
    <Sidebar className="w-64 border-r border-gray-200 bg-gray-100">
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-text-shimmer">
          Mistral Chat
        </h1>
      </SidebarHeader>
      <SidebarContent>
        {chats.length > 0 && (
          <SidebarMenu>
            <SidebarMenuItem>
              <Button 
                onClick={createNewChat} 
                variant="default" 
                size="sm" 
                className="w-full justify-start bg-gray-200 hover:bg-gray-300 text-gray-900"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Chat
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
        <SidebarMenu>
          {chats.map((chat) => (
            <SidebarMenuItem key={chat.id}>
              <div className="flex items-center w-full">
                <SidebarMenuButton 
                  onClick={() => setActiveChat(chat.id)} 
                  className={`flex-grow justify-start ${activeChat === chat.id ? 'bg-white' : 'hover:bg-white/50'}`}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="flex-grow text-left truncate">{chat.name}</span>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="ml-auto px-2 text-gray-500 hover:text-gray-700">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white">
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
      <div className="mt-auto p-4 border-t border-gray-200 bg-gray-200">
        <ProfileSection />
      </div>
    </Sidebar>
  )
}