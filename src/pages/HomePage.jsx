import { useState, useContext } from "react"
import { useSearchParams } from "react-router-dom"
import NoteList from "../components/NoteList"
import NoteSearchBar from "../components/NoteSearchBar"
import { AuthedUserContext } from "../contexts/AuthedUserContext"
import useNotes from "../hooks/useNotes"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function NotePage() {
  const { authedUser } = useContext(AuthedUserContext)
  const { locale } = useContext(LocaleContext)

  const { notes, loading, deleteNoteHandler, archiveNoteHandler } = useNotes("active")
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(() => searchParams.get("keyword") || "")

  const searchHandler = (keyword) => {
    setKeyword(keyword)
    keyword ? setSearchParams({ keyword }) : setSearchParams({})
  }

  const noteToRender = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))

  return (
    <>
      <h1 className="w-full mx-auto max-w-xl pl-2 text-xl font-medium sm:mt-2">
        {`${locales[locale].greeting} ${authedUser.name}`}
      </h1>
      <NoteSearchBar keyword={keyword} searchHandler={searchHandler} />
      <NoteList
        title={locales[locale].noteActive}
        notes={noteToRender}
        archiveHandler={archiveNoteHandler}
        deleteHandler={deleteNoteHandler}
        isLoading={loading}
      />
    </>
  )
}
