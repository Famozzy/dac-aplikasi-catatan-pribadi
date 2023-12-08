import { Component } from "react"
import autoBind from "auto-bind/react"
import EditableContent from "../components/EditableContent"
import { addNote } from "../utils/data"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const defaultTitle = "Catatan Baru"
const defaultBody = "Tulis sesuatu..."

class CreateNotePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: defaultTitle,
      body: defaultBody,
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

  saveHandler() {
    const { title, body } = this.state
    addNote({ title, body })
    this.props.navigate("/")
  }

  render() {
    return (
      <EditableContent
        title={defaultTitle}
        body={defaultBody}
        createdAt={new Date().toISOString()}
        isDisabled={false}
        inputHandler={this.inputHandler}
        saveHandler={this.saveHandler}
      />
    )
  }
}

CreateNotePage.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default function CreateNotePageWrapper() {
  const navigate = useNavigate()
  return <CreateNotePage navigate={navigate} />
}
