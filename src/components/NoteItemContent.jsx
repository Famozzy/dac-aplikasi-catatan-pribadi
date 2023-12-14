import { useContext } from "react"
import { Link } from "react-router-dom"
import showFormattedDate from "../utils/showFormattedDate"
import PropTypes from "prop-types"
import { LocaleContext } from "../contexts/LocaleContext"

export default function NoteItemContent({ id, title, body, createdAt }) {
  const { locale } = useContext(LocaleContext)

  return (
    <Link className="block" to={`/notes/${id}`}>
      <h1 title={title} className="text-xl font-medium truncate dark:text-gray-200">
        {title}
      </h1>
      <span className="text-gray-600 text-sm dark:text-gray-400">{showFormattedDate(createdAt, locale)}</span>
      <p className="overflow-hidden my-4 truncate dark:text-gray-300">{body}</p>
    </Link>
  )
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
