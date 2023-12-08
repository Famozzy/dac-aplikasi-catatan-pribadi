import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function NavItem({ name, path, icon }) {
  return (
    <Link to={path} className="hover:text-blue-400">
      {icon}
      {name}
    </Link>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}
