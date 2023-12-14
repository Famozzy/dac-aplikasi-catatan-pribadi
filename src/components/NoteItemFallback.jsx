import { useContext } from "react"
import { XSquare } from "@phosphor-icons/react"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function NoteItemFallback() {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="text-gray-400 flex flex-col h-32 col-span-3 items-center justify-center">
      <XSquare size={64} />
      <p className="text-lg flex">{locales[locale].noteFallback}</p>
    </div>
  )
}
