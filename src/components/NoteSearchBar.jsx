import Input from "./Input"
import PropTypes from "prop-types"

export default function NoteSearchBar({ keyword, searchHandler }) {
  return (
    <div className="w-full mt-4 bg-gray-800 max-w-xl mx-auto border border-gray-700 rounded-lg p-4">
      <Input
        id="search"
        label="Cari Catatan"
        type="text"
        value={keyword}
        onChange={searchHandler}
        placeholder="judul catatan.."
      />
    </div>
  )
}

NoteSearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
}
