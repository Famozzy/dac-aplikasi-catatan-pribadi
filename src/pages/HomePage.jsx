import { useState, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import NoteList from "../components/NoteList"
import NoteSearchBar from "../components/NoteSearchBar"
import { AuthedUserContext } from "../contexts/AuthedUserContext"
import useNotes from "../hooks/useNotes"

export default function NotePage() {
  const { notes, loading, deleteNoteHandler, archiveNoteHandler } = useNotes("active")
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(() => searchParams.get("keyword") || "")

  const { authedUser } = useContext(AuthedUserContext)

  const searchHandler = (keyword) => {
    setKeyword(keyword)
    setSearchParams({ keyword })
  }

  const noteToRender = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))

  return (
    <>
      <h1 className="w-full mx-auto max-w-xl pl-2 text-2xl font-medium sm:mt-2">Catatan {authedUser.name}</h1>
      <NoteSearchBar keyword={keyword} searchHandler={searchHandler} />
      <NoteList
        title={"Catatan Saya"}
        notes={noteToRender}
        archiveHandler={archiveNoteHandler}
        deleteHandler={deleteNoteHandler}
        isLoading={loading}
      />
    </>
  )
}
