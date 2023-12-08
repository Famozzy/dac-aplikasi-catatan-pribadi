import NoteItemContent from "./NoteItemContent"
import NoteItemAction from "./NoteItemAction"
import PropTypes from "prop-types"

export default function NoteItem({ note, archiveHandler, deleteHandler }) {
  return (
    <div className="block border border-gray-700 rounded-lg p-4 h-fit w-full hover:bg-gray-800">
      <NoteItemContent id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
      <NoteItemAction
        isArchived={note.archived}
        archiveHandler={() => archiveHandler(note.id)}
        deleteHandler={() => deleteHandler(note.id)}
      />
    </div>
  )
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
  archiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
}
