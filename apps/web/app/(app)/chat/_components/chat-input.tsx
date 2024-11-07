import { Button } from "@repo/design-system/components/ui/button"
import { Input } from "@repo/design-system/components/ui/input"
import { Send } from "lucide-react"

type ChatInputProps = {
  input: string
  setInput: (input: string) => void
  handleSend: () => void
  loading: boolean
}

export function ChatInput({ input, setInput, handleSend, loading }: ChatInputProps) {
  return (
    <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow rounded-full bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <Button onClick={handleSend} disabled={loading} className="rounded-full">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}