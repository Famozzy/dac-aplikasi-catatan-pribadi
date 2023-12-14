import { useContext } from "react"
import NoteList from "../components/NoteList"
import useNotes from "../hooks/useNotes"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function ArchivedNotePage() {
  const { locale } = useContext(LocaleContext)
  const { notes, loading, deleteNoteHandler, unarchiveNoteHandler } = useNotes("archived")

  return (
    <NoteList
      title={locales[locale].noteArchived}
      notes={notes}
      archiveHandler={unarchiveNoteHandler}
      deleteHandler={deleteNoteHandler}
      isLoading={loading}
    />
  )
}
