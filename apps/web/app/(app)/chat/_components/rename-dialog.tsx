import { Button } from "@repo/design-system/components/ui/button"
import { Input } from "@repo/design-system/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@repo/design-system/components/ui/dialog"

type RenameDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  newChatName: string
  setNewChatName: (name: string) => void
  handleRename: () => void
}

export function RenameDialog({ isOpen, onOpenChange, newChatName, setNewChatName, handleRename }: RenameDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleRename}>
            Rename
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}