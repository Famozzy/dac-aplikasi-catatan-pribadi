import showFormattedDate from "../utils/showFormattedDate"
import PropTypes from "prop-types"

export default function NoteDetail({ title, body, createdAt, archived }) {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 max-w-xl m-auto">
      <span>
        {archived ? (
          <span className="px-3 py-1 text-sm text-yellow-600 bg-yellow-300 border border-yellow-600 rounded-full">
            Arsip
          </span>
        ) : (
          <span className="px-3 py-1 text-sm text-green-600 bg-green-300 border border-green-600 rounded-full">
            Aktif
          </span>
        )}
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-gray-400 text-sm">{showFormattedDate(createdAt) || ""}</span>
      <p>{body}</p>
    </div>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
