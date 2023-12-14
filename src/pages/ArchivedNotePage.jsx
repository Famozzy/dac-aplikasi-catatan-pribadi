import NoteList from "../components/NoteList"
import useNotes from "../hooks/useNotes"

export default function ArchivedNotePage() {
  const { notes, loading, deleteNoteHandler, unarchiveNoteHandler } = useNotes("archived")

  return (
    <NoteList
      title={"Arsip"}
      notes={notes}
      archiveHandler={unarchiveNoteHandler}
      deleteHandler={deleteNoteHandler}
      isLoading={loading}
    />
  )
}
