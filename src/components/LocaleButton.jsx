import { Translate } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import NavButton from "./NavButton"

export default function LocaleButton({ lang, toggleLocale }) {
  return (
    <div className="fixed top-0 right-0 mx-14 py-6">
      <NavButton onClick={toggleLocale}>
        <Translate size={24} />
        {lang}
      </NavButton>
    </div>
  )
}

LocaleButton.propTypes = {
  lang: PropTypes.string.isRequired,
  toggleLocale: PropTypes.func.isRequired,
}
