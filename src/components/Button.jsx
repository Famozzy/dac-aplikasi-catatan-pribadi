import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function Button({ title, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="w-2/3 bg-blue-500 hover:bg-blue-600 text-slate-100 text-lg font-semibold py-2 px-4 rounded text-center sm:text-base"
      >
        {title}
      </Link>
    )
  }

  return (
    <button className="w-2/3 bg-blue-500 hover:bg-blue-600 text-slate-100 text-lg font-semibold py-2 px-4 rounded text-center sm:text-base">
      {title}
    </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
}
