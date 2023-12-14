import { useContext } from "react"
import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import LocaleButton from "../components/LocaleButton"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function LoginPage() {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <>
      <LocaleButton lang={locale} toggleLocale={toggleLocale} />
      <section className="bg-gray-100 border-gray-300 shadow-md border backdrop-blur-sm rounded-xl py-14 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold">{locales[locale].loginTitle}</h1>
        <p className="text-center mt-1 mb-5 text-gray-600 dark:text-gray-400">{locales[locale].loginDescription}</p>
        <LoginForm />
        <p className="text-center mt-5 text-gray-600 dark:text-gray-400">
          {locales[locale].loginMessage}{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            {locales[locale].loginLink}
          </Link>
        </p>
      </section>
    </>
  )
}
