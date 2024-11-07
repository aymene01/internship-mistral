type ChatHeaderProps = {
    title: string
  }
  
  export function ChatHeader({ title }: ChatHeaderProps) {
    return (
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">{title}</h2>
      </header>
    )
  }