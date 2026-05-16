import { Hash } from "lucide-react"

export function CategoryIcon({ name, size = 24 }: { name: string; size?: number }) {
  return <Hash size={size} strokeWidth={1.5} />
}
