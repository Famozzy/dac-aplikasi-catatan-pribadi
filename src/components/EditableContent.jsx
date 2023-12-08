import showFormattedDate from "../utils/showFormattedDate"
import { FolderPlus } from "@phosphor-icons/react"
import PropTypes from "prop-types"

export default function EditableContent({ title, body, isDisabled, createdAt, inputHandler, saveHandler }) {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 max-w-xl m-auto">
      <div className="flex ml-auto">
        <button
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md border border-blue-300 text-blue-400 hover:text-white hover:bg-blue-500 focus:ring-blue-900 disabled:opacity-50"
          onClick={saveHandler}
          disabled={isDisabled}
        >
          <FolderPlus size={24} weight="fill" className="inline" />
          Simpan
        </button>
      </div>
      <h1 className="text-2xl font-bold" onInput={inputHandler} suppressContentEditableWarning="true" contentEditable>
        {title}
      </h1>
      <span className="text-gray-400 text-sm">{showFormattedDate(createdAt)}</span>
      <p onInput={inputHandler} suppressContentEditableWarning="true" contentEditable>
        {body}
      </p>
    </div>
  )
}

EditableContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  inputHandler: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
}
