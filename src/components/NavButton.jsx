import PropTypes from "prop-types"

export default function NavButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-1 items-center hover:text-blue-600 sm:flex-col dark:hover:text-blue-400"
    >
      {children}
    </button>
  )
}

NavButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}
