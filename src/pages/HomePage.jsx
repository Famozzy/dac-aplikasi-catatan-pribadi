import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import NoteList from "../components/NoteList"
import NoteSearchBar from "../components/NoteSearchBar"
import { getActiveNotes, archiveNote, deleteNote } from "../utils/data"

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultKeyword = searchParams.get("keyword")

  const [notes, setNotes] = useState(getActiveNotes())
  const [keyword, setKeyword] = useState(defaultKeyword || "")

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
