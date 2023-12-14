import { useContext } from "react"
import LocaleButton from "../components/LocaleButton"
import RegisterForm from "../components/RegisterForm"
import { Link } from "react-router-dom"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function RegisterPage() {
  const { locale, toggleLocale } = useContext(LocaleContext)
  return (
    <>
      <LocaleButton lang={locale} toggleLocale={toggleLocale} />
      <section className="bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-xl py-14 my-8">
        <h1 className="text-center text-2xl font-bold">{locales[locale].registerTitle}</h1>
        <p className="text-center text-gray-400 mt-1 mb-5">{locales[locale].registerDescription}</p>
        <RegisterForm />
        <p className="text-center text-gray-400 mt-5">
          {locales[locale].registerMessage}{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            {locales[locale].registerLink}
          </Link>
        </p>
      </section>
    </>
  )
}
