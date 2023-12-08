import { Component } from "react"
import autoBind from "auto-bind/react"
import NoteList from "../components/NoteList"
import { unarchiveNote, deleteNote, getArchivedNotes } from "../utils/data"

class ArchivedNotePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getArchivedNotes(),
    }
    autoBind(this)
  }

  deleteNoteHandler(id) {
    deleteNote(id)
    this.setState({ notes: getArchivedNotes() })
  }

  archiveNoteHandler(id) {
    unarchiveNote(id)
    this.setState({ notes: getArchivedNotes() })
  }

  render() {
    const { notes } = this.state
    return (
      <NoteList
        title={"Arsip"}
        notes={notes}
        archiveHandler={this.archiveNoteHandler}
        deleteHandler={this.deleteNoteHandler}
      />
    )
  }
}

export default ArchivedNotePage
