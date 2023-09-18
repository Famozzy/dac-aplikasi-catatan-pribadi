import { showFormatedDate } from "../utils"

export default function NoteItemContent({ title, body, createdAt }) {
  return (
    <>
      <h1 title={title} className="text-xl font-medium text-gray-200 truncate">
        {title}
      </h1>
      <span className="text-gray-400 text-sm">{showFormatedDate(createdAt)}</span>
      <p className="text-gray-300 overflow-hidden my-4">{body}</p>
    </>
  )
}
