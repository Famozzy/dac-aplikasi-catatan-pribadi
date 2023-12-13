import showFormattedDate from "../utils/showFormattedDate"
import PropTypes from "prop-types"

export default function NoteDetail({ title, body, createdAt }) {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 max-w-xl m-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-gray-400 text-sm">{showFormattedDate(createdAt)}</span>
      <p>{body}</p>
    </div>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
