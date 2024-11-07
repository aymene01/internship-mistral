import { signOut, useSession } from "@repo/auth/react"
import { Button } from "@repo/design-system/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/design-system/components/ui/avatar"

export function ProfileSection() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="w-10 h-10">
        <AvatarFallback>{session?.user?.name?.[0] ?? 'U'}</AvatarFallback>
        <AvatarImage src={session?.user?.image ?? '/user-avatar.png'} />
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{session?.user?.name ?? 'User'}</span>
        <Button variant="ghost" size="sm" className="justify-start px-0" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </div>
  )
}