import { XSquare } from "@phosphor-icons/react"

export default function NoteItemFallback() {
  return (
    <div className="text-gray-400 flex flex-col h-32 col-span-3 items-center justify-center">
      <XSquare size={64} />
      <p className="text-lg flex">Tidak ada catatan</p>
    </div>
  )
}
