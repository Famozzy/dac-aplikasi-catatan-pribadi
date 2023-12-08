import NoteItem from "./NoteItem"
import NoteItemFallback from "./NoteItemFallback"
import PropTypes from "prop-types"

export default function NoteList({ title, notes, archiveHandler, deleteHandler }) {
  return (
    <div className="mt-5 space-y-5">
      <h2 className="text-2xl font-medium text-gray-200 col-span-3">
        {title}
        <span className="text-gray-400">{`[${notes.length}]`}</span>
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-5 lg:grid-cols-2 sm:block sm:space-y-3">
        {notes.length ? (
          notes.map((note) => (
            <NoteItem note={note} key={note.id} archiveHandler={archiveHandler} deleteHandler={deleteHandler} />
          ))
        ) : (
          <NoteItemFallback />
        )}
      </div>
    </div>
  )
}

NoteList.propTypes = {
  title: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  archiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
}
