import NoteItem from "./NoteItem"
import NoteItemFallback from "./NoteItemFallback"

export default function NoteList({ notes, archiveHandler, deleteHandler }) {
  const archivedNotes = notes.filter((note) => note.archived)
  const activeNotes = notes.filter((note) => !note.archived)

  const noteGroup = [
    { title: "Catatan Saya", notes: activeNotes },
    { title: "Arsip", notes: archivedNotes },
  ]

  return (
    <div className="mt-5 space-y-5">
      {noteGroup.map(({ title, notes }, index) => (
        <div key={index}>
          <h2 className="text-2xl font-medium text-gray-200 col-span-3">
            {title + " "}
            <span className="text-gray-400">{`[${notes.length}]`}</span>
          </h2>
          <div className="grid grid-cols-3 gap-3 mt-5 md:grid-cols-2 sm:block sm:space-y-3">
            {notes.length ? (
              notes.map((note) => (
                <NoteItem note={note} key={note.id} archiveHandler={archiveHandler} deleteHandler={deleteHandler} />
              ))
            ) : (
              <NoteItemFallback />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
