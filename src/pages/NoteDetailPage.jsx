import { Component } from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { getNote } from "../utils/data"
import showFormattedDate from "../utils/showFormattedDate"

class NoteDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: getNote(this.props.id),
    }
  }

  render() {
    if (!this.state.note) {
      return (
        <div className="flex flex-col gap-4 mt-16 max-w-xl m-auto text-gray-400">
          <h1 className="text-2xl font-medium">Catatan tidak ditemukan</h1>
        </div>
      )
    }

    const { title, body, createdAt } = this.state.note

    return (
      <div className="flex flex-col gap-4 mt-4 max-w-xl m-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-gray-400 text-sm">{showFormattedDate(createdAt)}</span>
        <p>{body}</p>
      </div>
    )
  }
}

NoteDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default function NoteDetailWrapper() {
  const { id } = useParams()
  return <NoteDetailPage id={id} />
}
