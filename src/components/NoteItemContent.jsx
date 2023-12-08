import { Link } from "react-router-dom"
import showFormattedDate from "../utils/showFormattedDate"
import PropTypes from "prop-types"

export default function NoteItemContent({ id, title, body, createdAt }) {
  return (
    <Link className="block" to={`/notes/${id}`}>
      <h1 title={title} className="text-xl font-medium text-gray-200 truncate">
        {title}
      </h1>
      <span className="text-gray-400 text-sm">{showFormattedDate(createdAt)}</span>
      <p className="text-gray-300 overflow-hidden my-4 truncate">{body}</p>
    </Link>
  )
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
