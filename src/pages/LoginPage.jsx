import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"

export default function LoginPage() {
  return (
    <section className="bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-xl py-14">
      <h1 className="text-center text-2xl font-bold">Masuk</h1>
      <p className="text-center text-gray-400 mt-1 mb-5">Masuk untuk membuat dan mengelola catatan pribadimu</p>
      <LoginForm />
      <p className="text-center text-gray-400 mt-5">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-400 hover:underline">
          Daftar
        </Link>
      </p>
    </section>
  )
}
