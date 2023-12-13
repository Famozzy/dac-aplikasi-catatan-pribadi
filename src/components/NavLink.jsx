import { Link } from "react-router-dom"
import NavButton from "./NavButton"
import PropTypes from "prop-types"

export default function NavLink({ name, path, icon }) {
  return (
    <Link to={path}>
      <NavButton>
        {icon}
        {name}
      </NavButton>
    </Link>
  )
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}
