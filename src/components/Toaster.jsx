import { Toaster as ReactToaster } from "react-hot-toast"

export default function Toaster() {
  return (
    <ReactToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1F2937",
          color: "#fff",
        },
      }}
    />
  )
}
