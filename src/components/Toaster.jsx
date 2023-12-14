import { useContext } from "react"
import { Toaster as ReactToaster } from "react-hot-toast"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Toaster() {
  const { theme } = useContext(ThemeContext)
  const toastThemes = {
    light: {
      background: "#fff",
      color: "#1F2937",
    },
    dark: {
      background: "#1F2937",
      color: "#fff",
    },
  }

  return (
    <ReactToaster
      position="bottom-right"
      toastOptions={{
        style: toastThemes[theme],
      }}
    />
  )
}
