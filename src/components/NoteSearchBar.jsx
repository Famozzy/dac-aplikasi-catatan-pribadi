import { useContext } from "react"
import Input from "./Input"
import PropTypes from "prop-types"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function NoteSearchBar({ keyword, searchHandler }) {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="w-full mt-4 bg-gray-800 max-w-xl mx-auto border border-gray-700 rounded-lg p-4">
      <Input
        id="search"
        label={locales[locale].searchLabel}
        type="text"
        value={keyword}
        onChange={(e) => searchHandler(e.target.value)}
        placeholder={locales[locale].searchPlaceholder}
      />
    </div>
  )
}

NoteSearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
}
