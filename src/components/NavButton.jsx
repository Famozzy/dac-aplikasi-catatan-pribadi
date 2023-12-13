import PropTypes from "prop-types"

export default function NavButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="flex gap-1 hover:text-blue-400 sm:flex-col items-center">
      {children}
    </button>
  )
}

NavButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}
