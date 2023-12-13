import { useState, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import NoteList from "../components/NoteList"
import NoteSearchBar from "../components/NoteSearchBar"
import { getActiveNotes, archiveNote, deleteNote } from "../utils/data"
import { AuthedUserContext } from "../contexts/AuthedUserContext"

export default function NotePage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [notes, setNotes] = useState(getActiveNotes())
  const [keyword, setKeyword] = useState(() => searchParams.get("keyword") || "")

  const { authedUser } = useContext(AuthedUserContext)

  const deleteNoteHandler = (id) => {
    deleteNote(id)
    setNotes(getActiveNotes())
  }

  const archiveNoteHandler = (id) => {
    archiveNote(id)
    setNotes(getActiveNotes())
  }

  const searchHandler = (keyword) => {
    setKeyword(keyword)
    setSearchParams({ keyword })
  }

  const noteToRender = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))

  return (
    <>
      <h1 className="w-full mx-auto max-w-lg text-2xl font-medium sm:mt-2">Catatan {authedUser.name}</h1>
      <NoteSearchBar keyword={keyword} searchHandler={searchHandler} />
      <NoteList
        title={"Catatan Saya"}
        notes={noteToRender}
        archiveHandler={archiveNoteHandler}
        deleteHandler={deleteNoteHandler}
      />
    </>
  )
}
