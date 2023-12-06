import { Component } from "react"
import autoBind from "auto-bind/react"
import NoteCreateForm from "./components/NoteCreateForm"
import NoteWrapper from "./components/NoteWrapper"
import { getAllNotes } from "./utils/data"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getAllNotes(),
      filteredNotes: [],
      isSearch: false,
    }
    autoBind(this)
  }

  addNoteHandler(data) {
    const { notes } = this.state
    const { title, body } = data

    const newNote = {
      id: crypto.randomUUID(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    }

    this.setState({ notes: [...notes, newNote], filteredNotes: [], isSearch: false })
  }

  deleteNoteHandler(id) {
    const { notes } = this.state
    const newNotes = notes.filter((note) => note.id !== id)
    this.setState({ notes: newNotes })
  }

  archiveNoteHandler(id) {
    const { notes } = this.state
    const note = notes.find((note) => note.id === id)
    note.archived = !note.archived
    this.setState({ notes, isSearching: false })
  }

  searchHandler(query) {
    const { notes } = this.state
    if (!query) return this.setState({ filteredNotes: [], isSearch: false })
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
    this.setState({ filteredNotes, isSearch: true })
  }

  render() {
    const { notes, filteredNotes, isSearch } = this.state
    const noteToRender = isSearch ? filteredNotes : notes
    return (
      <main className="flex justify-center my-10 px-3 gap-4 mx-auto w-full max-w-[1400px] xl:flex-col">
        <NoteCreateForm addNote={this.addNoteHandler} />
        <NoteWrapper
          notes={noteToRender}
          archiveNoteHandler={this.archiveNoteHandler}
          deleteNoteHandler={this.deleteNoteHandler}
          searchHandler={this.searchHandler}
        />
      </main>
    )
  }
}

export default App
