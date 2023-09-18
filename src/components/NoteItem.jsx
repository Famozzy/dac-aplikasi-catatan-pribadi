import NoteItemContent from "./NoteItemContent"
import NoteItemAction from "./NoteItemAction"

export default function NoteItem({ note, archiveHandler, deleteHandler }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-fit w-full">
      <NoteItemContent title={note.title} body={note.body} createdAt={note.createdAt} />
      <NoteItemAction
        isArchived={note.archived}
        archiveHandler={() => archiveHandler(note.id)}
        deleteHandler={() => deleteHandler(note.id)}
      />
    </div>
  )
}
