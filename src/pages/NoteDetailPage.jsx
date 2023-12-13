import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NoteDetail from "../components/NoteDetail"
import { getNote } from "../utils/data"

export default function NotedetailPage() {
  const { id } = useParams()
  const [note, setNote] = useState({
    title: "",
    body: "",
    createdAt: "",
  })

  useEffect(() => {
    const note = getNote(id)
    setNote(note)
  }, [])

  const { title, body, createdAt } = note
  return <NoteDetail title={title} body={body} createdAt={createdAt} />
}
