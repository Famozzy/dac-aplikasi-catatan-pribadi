import Input from "./Input"
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router-dom"
import { register } from "../utils/api"
import toast from "react-hot-toast"

export default function RegisterForm() {
  const [name, handleNameChange] = useInput("")
  const [email, handleEmailChange] = useInput("")
  const [password, handlePasswordChange] = useInput("")
  const [passwordConfirmation, handlePasswordConfirmationChange] = useInput("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== passwordConfirmation) {
      return toast.error("Password dan Konfirmasi Password harus sama!")
    }

    const { error } = await register({ name, email, password, password_confirmation: passwordConfirmation })

    if (!error) {
      toast.success("Registrasi berhasil!")
      navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 space-y-4 sm:px-4">
      <Input
        label="Nama"
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="nama.."
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
        label="Konfirmasi Password"
        id="password_confirmation"
        type="password"
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
        placeholder="konfirmasi password.."
        required={true}
      />
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-blue-900"
      >
        Daftar
      </button>
    </form>
  )
}
