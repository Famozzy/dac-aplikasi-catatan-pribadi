import NoteInput from "../components/NoteInput"
import { addNote } from "../utils/data"
import { useNavigate } from "react-router-dom"
import useInput from "../hooks/useInput"

const defaultTitle = "Catatan Baru"
const defaultBody = "Tulis sesuatu..."

export default function CreateNotePage() {
  const navigate = useNavigate()

  const [title, handleTitleInput] = useInput(defaultTitle)
  const [body, handleBodyInput] = useInput(defaultBody)

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
    <NoteInput
      title={defaultTitle}
      body={defaultBody}
      createdAt={new Date().toISOString()}
      inputHandler={inputHandler}
      saveHandler={saveHandler}
    />
  )
}
