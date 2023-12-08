import { Component } from "react"
import { useSearchParams } from "react-router-dom"
import autoBind from "auto-bind/react"
import PropTypes from "prop-types"
import NoteList from "../components/NoteList"
import NoteSearchBar from "../components/NoteSearchBar"
import { getActiveNotes, archiveNote, deleteNote } from "../utils/data"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getActiveNotes(),
      keyword: this.props.keyword || "",
    }
    autoBind(this)
  }

  deleteNoteHandler(id) {
    deleteNote(id)
    this.setState({ notes: getActiveNotes() })
  }

  archiveNoteHandler(id) {
    archiveNote(id)
    this.setState({ notes: getActiveNotes() })
  }

  searchHandler(keyword) {
    this.setState(() => ({ keyword }))
    this.props.keywordChange(keyword)
  }

  render() {
    const { notes, keyword } = this.state
    const noteToRender = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))

    return (
      <>
        <NoteSearchBar keyword={this.state.keyword} searchHandler={this.searchHandler} />
        <NoteList
          title={"Catatan Saya"}
          notes={noteToRender}
          archiveHandler={this.archiveNoteHandler}
          deleteHandler={this.deleteNoteHandler}
        />
      </>
    )
  }
}

HomePage.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
}

export default function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get("keyword")

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <HomePage keyword={keyword} keywordChange={changeSearchParams} />
}
