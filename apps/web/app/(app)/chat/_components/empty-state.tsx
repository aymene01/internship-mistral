import { Button } from "@repo/design-system/components/ui/button"
import { Plus, Sparkles } from "lucide-react"

type EmptyStateProps = {
  createNewChat: () => void
}

export function EmptyState({ createNewChat }: EmptyStateProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <Sparkles className="h-16 w-16 text-yellow-400 mb-6 animate-pulse" />
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-text-shimmer">
        Welcome to Mistral Chat
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md text-lg">
        Embark on an AI-powered conversation journey. Create your first chat and explore the possibilities!
      </p>
      <Button 
        onClick={createNewChat} 
        size="lg" 
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
      >
        <Plus className="mr-2 h-5 w-5" />
        Start Your First Chat
      </Button>
    </div>
  )
}