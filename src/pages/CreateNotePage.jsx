import { useState } from "react"
import NoteInput from "../components/NoteInput"
import { addNote } from "../utils/api"
import { useNavigate } from "react-router-dom"

const defaultTitle = "Catatan Baru"
const defaultBody = "Tulis sesuatu..."

export default function CreateNotePage() {
  const navigate = useNavigate()

  const [title, setTitle] = useState(defaultTitle)
  const [body, setBody] = useState(defaultBody)

  const inputHandler = (event) => {
    const targetNodeName = {
      H1: setTitle,
      P: setBody,
    }
    targetNodeName[event.target.nodeName](event.target.textContent)
    console.log(title, body)
  }

  const saveHandler = async () => {
    await addNote({ title, body })
    navigate("/")
  }

  return (
    <NoteInput
      title={defaultTitle}
      body={defaultBody}
      createdAt={new Date().toISOString()}
      inputHandler={inputHandler}
      saveHandler={saveHandler}
    />
  )
}
