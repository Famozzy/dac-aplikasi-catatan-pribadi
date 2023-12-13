import RegisterForm from "../components/RegisterForm"
import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <section className="bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-xl py-14 my-8">
      <h1 className="text-center text-2xl font-bold">Daftar</h1>
      <p className="text-center text-gray-400 mt-1 mb-5">Daftar untuk membuat dan mengelola catatan pribadimu</p>
      <RegisterForm />
      <p className="text-center text-gray-400 mt-5">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">
          Masuk
        </Link>
      </p>
    </section>
  )
}
