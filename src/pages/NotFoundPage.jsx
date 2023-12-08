import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-screen">
      <h1 className="text-8xl font-black text-gray-200">404</h1>
      <h2 className="text-xl font-light text-gray-400">
        Halaman tidak ditemukan, kembali ke{" "}
        <Link to="/" className="text-blue-400 hover:underline">
          halaman utama
        </Link>
      </h2>
    </div>
  )
}
