import { useContext } from "react"
import Input from "./Input"
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router-dom"
import { register } from "../utils/api"
import toast from "react-hot-toast"
import { LocaleContext } from "../contexts/LocaleContext"
import locales from "../utils/locales"

export default function RegisterForm() {
  const { locale } = useContext(LocaleContext)

  const [name, handleNameChange] = useInput("")
  const [email, handleEmailChange] = useInput("")
  const [password, handlePasswordChange] = useInput("")
  const [passwordConfirmation, handlePasswordConfirmationChange] = useInput("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== passwordConfirmation) {
      return toast.error(locales[locale].registerConfirmPasswordError)
    }

    const { error } = await register({ name, email, password, password_confirmation: passwordConfirmation })

    if (!error) {
      toast.success(locales[locale].registerSuccess)
      navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 space-y-4 sm:px-4">
      <Input
        label={locales[locale].registerNameInput}
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder={`${locales[locale].registerNameInput.toLowerCase()}..`}
        required={true}
      />
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
      <Input
        label={locales[locale].registerConfirmPasswordInput}
        id="password_confirmation"
        type="password"
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
        placeholder={`${locales[locale].registerConfirmPasswordInput.toLowerCase()}..`}
        required={true}
      />
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-900"
      >
        {locales[locale].registerTitle}
      </button>
    </form>
  )
}
