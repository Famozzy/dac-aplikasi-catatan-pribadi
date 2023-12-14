import { useContext } from "react"
import showFormattedDate from "../utils/showFormattedDate"
import { FolderPlus } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import { LocaleContext } from "../contexts/LocaleContext"

export default function NoteInput({ title, body, createdAt, inputHandler, saveHandler }) {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="w-full flex flex-col gap-4 mt-4 max-w-xl m-auto">
      <div className="flex ml-auto">
        <button
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md border-2 border-blue-500 hover:text-white text-blue-600 hover:bg-blue-700 dark:border-blue-300 dark:text-blue-400 dark:hover:bg-blue-500 focus:ring-blue-900 disabled:opacity-50"
          onClick={saveHandler}
        >
          <FolderPlus size={24} weight="fill" className="inline" />
          {locale === "ID" ? "Simpan" : "Save"}
        </button>
      </div>
      <h1
        className="text-gray-700 text-2xl font-bold dark:text-gray-400"
        onInput={inputHandler}
        suppressContentEditableWarning="true"
        contentEditable
      >
        {title}
      </h1>
      <span className="text-gray-400 text-sm">{showFormattedDate(createdAt, locale)}</span>
      <p onInput={inputHandler} suppressContentEditableWarning="true" contentEditable>
        {body}
      </p>
    </div>
  )
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
}
