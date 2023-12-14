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
      <section className="bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-xl py-14">
        <h1 className="text-center text-2xl font-bold">{locales[locale].loginTitle}</h1>
        <p className="text-center text-gray-400 mt-1 mb-5">{locales[locale].loginDescription}</p>
        <LoginForm />
        <p className="text-center text-gray-400 mt-5">
          {locales[locale].loginMessage}{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            {locales[locale].loginLink}
          </Link>
        </p>
      </section>
    </>
  )
}
