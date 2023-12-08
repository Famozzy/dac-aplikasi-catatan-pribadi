import PropTypes from "prop-types"

export default function NoteSearchBar({ keyword, searchHandler }) {
  return (
    <div className="w-full mt-4 bg-gray-800 max-w-xl mx-auto border border-gray-700 rounded-lg p-4">
      <label htmlFor="search" className="block mb-2 font-medium text-sm text-gray-200">
        Cari Catatan
      </label>
      <input
        value={keyword}
        type="text"
        placeholder="judul catatan"
        onChange={(ev) => searchHandler(ev.target.value)}
        className="block rounded-lg border focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  )
}

NoteSearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
}
