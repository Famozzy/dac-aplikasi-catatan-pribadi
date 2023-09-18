export default function NoteItemAction({ isArchived, archiveHandler, deleteHandler }) {
  return (
    <div className="flex mt-2">
      <button
        type="button"
        onClick={archiveHandler}
        className="w-full text-sm border rounded-lg px-5 py-2.5 text-center mr-2 mb-2 border-yellow-300 text-yellow-400 hover:text-white hover:bg-yellow-500 focus:ring-yellow-900"
      >
        {isArchived ? "Kembalikan" : "Arsipkan"}
      </button>
      <button
        type="button"
        onClick={deleteHandler}
        className="w-full text-sm border rounded-lg px-5 py-2.5 text-center mr-2 mb-2 border-red-300 text-red-400 hover:text-white hover:bg-red-500 focus:ring-red-900"
      >
        Hapus
      </button>
    </div>
  )
}
