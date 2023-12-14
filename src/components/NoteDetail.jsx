import { useContext } from "react"
import showFormattedDate from "../utils/showFormattedDate"
import PropTypes from "prop-types"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function NoteDetail({ title, body, createdAt, archived }) {
  const { locale } = useContext(LocaleContext)

  if (!title) {
    return null
  }

  return (
    <div className="w-full flex flex-col gap-4 mt-4 max-w-xl m-auto">
      <span>
        {archived ? (
          <span className="px-3 py-1 text-sm text-yellow-700 bg-yellow-300 border border-yellow-700 rounded-full">
            {locales[locale].noteStatus[0]}
          </span>
        ) : (
          <span className="px-3 py-1 text-sm text-green-700 bg-green-300 border border-green-700 rounded-full">
            {locales[locale].noteStatus[1]}
          </span>
        )}
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-sm text-gray-600 dark:text-gray-400">{showFormattedDate(createdAt, locale) || ""}</span>
      <p>{body}</p>
    </div>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
}
