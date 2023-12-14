import { AuthedUserProvider } from "./contexts/AuthedUserContext"
import { LocaleProvider } from "./contexts/LocaleContext"
import PropTypes from "prop-types"

export default function Provider({ children }) {
  return (
    <AuthedUserProvider>
      <LocaleProvider>
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </LocaleProvider>
    </AuthedUserProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
