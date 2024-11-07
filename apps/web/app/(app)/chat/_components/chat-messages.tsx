import { ScrollArea } from "@repo/design-system/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/design-system/components/ui/avatar"
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from "lucide-react"
import { Message } from './chat'

type ChatMessagesProps = {
  messages: Message[]
  loading: boolean
}

export function ChatMessages({ messages, loading }: ChatMessagesProps) {
  return (
    <ScrollArea className="flex-1 p-4 overflow-y-auto">
      <AnimatePresence initial={false}>
        {messages.map((message) => (
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
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-900'
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
            <div className="p-3 rounded-2xl bg-gray-200">
              <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
            </div>
          </div>
        </motion.div>
      )}
    </ScrollArea>
  )
}