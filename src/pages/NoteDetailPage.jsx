import { useParams } from "react-router-dom"
import { getNote } from "../utils/data"
import EditableContent from "../components/EditableContent"

export default function NotedetailPage() {
  const { id } = useParams()
  const note = getNote(id)

  const { title, body, createdAt } = note
  return (
    <EditableContent
      title={title}
      body={body}
      createdAt={createdAt}
      isDisabled={true}
      inputHandler={() => console.log("onInput")}
      saveHandler={() => console.log("saveChanges")}
    />
  )
}
