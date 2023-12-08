import { Component } from "react"
import { useParams } from "react-router-dom"
import autoBind from "auto-bind"
import PropTypes from "prop-types"
import { editNote, getNote } from "../utils/data"

import { useNavigate } from "react-router-dom"
import EditableContent from "../components/EditableContent"

class NoteDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
    }
    autoBind(this)
  }

  inputHandler(ev) {
    const targetNodeName = {
      h1: "title",
      p: "body",
    }

    const key = targetNodeName[ev.target.nodeName.toLowerCase()]
    this.setState(() => ({
      [key]: ev.target.innerHTML,
    }))
  }

  saveChanges() {
    const { id } = this.props.note
    const { title, body } = this.state
    editNote({ id, title, body })
    this.props.navigate("/")
  }

  render() {
    const { note } = this.props

    if (!note) {
      return (
        <div className="flex flex-col gap-4 mt-16 max-w-xl m-auto text-gray-400">
          <h1 className="text-2xl font-medium">Catatan tidak ditemukan</h1>
        </div>
      )
    }

    const { title, body, createdAt } = note
    const isDisabled = this.state.title === title && this.state.body === body
    return (
      <EditableContent
        title={title}
        body={body}
        createdAt={createdAt}
        isDisabled={isDisabled}
        inputHandler={this.inputHandler}
        saveHandler={this.saveChanges}
      />
    )
  }
}

NoteDetailPage.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
  navigate: PropTypes.func.isRequired,
}

export default function NoteDetailWrapper() {
  const { id } = useParams()
  const navigate = useNavigate()
  const note = getNote(id)
  return <NoteDetailPage note={note} navigate={navigate} />
}
