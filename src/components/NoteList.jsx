import NoteItem from "./NoteItem"
import PropTypes from "prop-types"
import NoteWrapper from "./NoteWrapper"

export default function NoteList({ title, notes, archiveHandler, deleteHandler, isLoading }) {
  return (
    <div className="mt-5 space-y-5">
      <h2 className="text-2xl font-medium text-gray-200 col-span-3">
        {title}
        <span className="text-gray-400">{`[${notes.length}]`}</span>
      </h2>
      <NoteWrapper isLoading={isLoading}>
        {notes.map((note, i) => (
          <NoteItem key={i} note={note} archiveHandler={archiveHandler} deleteHandler={deleteHandler} />
        ))}
      </NoteWrapper>
    </div>
  )
}

NoteList.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  archiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
}
