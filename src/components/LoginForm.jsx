import { useContext } from "react"
import Input from "./Input"
import useInput from "../hooks/useInput"
import { login } from "../utils/api"
import { AuthedUserContext } from "../contexts/AuthedUserContext"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function LoginForm() {
  const { locale } = useContext(LocaleContext)
  const { setUserLogged } = useContext(AuthedUserContext)

  const [email, handleEmailChange] = useInput("")
  const [password, handlePasswordChange] = useInput("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error, data } = await login({ email, password })

    if (!error) {
      await setUserLogged(data)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 space-y-4 sm:px-4">
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email.."
        required={true}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password.."
        required={true}
      />
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-blue-900"
      >
        {locales[locale].loginTitle}
      </button>
    </form>
  )
}
