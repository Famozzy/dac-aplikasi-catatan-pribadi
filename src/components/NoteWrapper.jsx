import NoteSearchBar from "./NoteSearchBar"
import NoteList from "./NoteList"

export default function NoteWrapper({ notes, archiveNoteHandler, deleteNoteHandler, searchHandler }) {
  return (
    <div className="w-full">
      <NoteSearchBar searchHandler={searchHandler} />
      <NoteList notes={notes} archiveHandler={archiveNoteHandler} deleteHandler={deleteNoteHandler} />
    </div>
  )
}
