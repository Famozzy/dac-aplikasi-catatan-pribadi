import { useContext } from "react"
import { Link } from "react-router-dom"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function NotFoundPage() {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-screen -mt-24">
      <h1 className="text-8xl font-black text-gray-900 dark:text-gray-200">404</h1>
      <h2 className="text-xl font-light text-gray-700 dark:text-gray-400">
        {locales[locale].notFoundMessage}{" "}
        <Link to="/" className="text-blue-400 hover:underline">
          {locales[locale].notFoundLink}
        </Link>
      </h2>
    </div>
  )
}
