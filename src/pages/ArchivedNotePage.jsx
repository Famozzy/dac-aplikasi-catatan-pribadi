import { useState } from "react"
import NoteList from "../components/NoteList"
import { unarchiveNote, deleteNote, getArchivedNotes } from "../utils/data"

export default function ArchivedNotePage() {
  const [notes, setNotes] = useState(getArchivedNotes())

  const deleteNoteHandler = (id) => {
    deleteNote(id)
    setNotes(getArchivedNotes())
  }

  const archiveNoteHandler = (id) => {
    unarchiveNote(id)
    setNotes(getArchivedNotes())
  }

  return (
    <NoteList title={"Arsip"} notes={notes} archiveHandler={archiveNoteHandler} deleteHandler={deleteNoteHandler} />
  )
}
