import { Trash, ArchiveTray, ArrowUUpLeft } from "@phosphor-icons/react"
import PropTypes from "prop-types"

export default function NoteItemAction({ isArchived, archiveHandler, deleteHandler }) {
  const buttonSize = 20
  const actionButton = {
    archive: <ArchiveTray size={buttonSize} weight="fill" />,
    unarchive: <ArrowUUpLeft size={buttonSize} weight="fill" />,
    delete: <Trash size={buttonSize} weight="fill" />,
  }

  return (
    <div className="flex justify-end mt-2">
      <button
        type="button"
        onClick={archiveHandler}
        className="text-sm border rounded-lg px-4 py-2.5 text-center mr-2 mb-2 border-yellow-300 text-yellow-400 hover:text-white hover:bg-yellow-500 focus:ring-yellow-900"
      >
        {isArchived ? actionButton.unarchive : actionButton.archive}
      </button>
      <button
        type="button"
        onClick={deleteHandler}
        className="text-sm border rounded-lg px-4 py-2.5 text-center mr-2 mb-2 border-red-300 text-red-400 hover:text-white hover:bg-red-500 focus:ring-red-900"
      >
        {actionButton.delete}
      </button>
    </div>
  )
}

NoteItemAction.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  archiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
}
