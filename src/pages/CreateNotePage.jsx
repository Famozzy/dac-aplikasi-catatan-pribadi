import { useState } from "react"
import EditableContent from "../components/EditableContent"
import { addNote } from "../utils/data"
import { useNavigate } from "react-router-dom"

const defaultTitle = "Catatan Baru"
const defaultBody = "Tulis sesuatu..."

export default function CreateNotePage() {
  const navigate = useNavigate()

  const [title, setTitle] = useState(defaultTitle)
  const [body, setBody] = useState(defaultBody)

  const handleTitleInput = (ev) => setTitle(ev.target.innerText)
  const handleBodyInput = (ev) => setBody(ev.target.innerText)

  const inputHandler = (ev) => {
    const targetNodeName = {
      h1: handleTitleInput,
      p: handleBodyInput,
    }
    targetNodeName[ev.target.nodeName.toLowerCase()](ev)
  }

  const saveHandler = () => {
    addNote({ title, body })
    navigate("/")
  }

  return (
    <EditableContent
      title={defaultTitle}
      body={defaultBody}
      createdAt={new Date().toISOString()}
      isDisabled={false}
      inputHandler={inputHandler}
      saveHandler={saveHandler}
    />
  )
}
