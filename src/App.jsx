import { useEffect, useContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import NoteDetailPage from "./pages/NoteDetailPage"
import ArchivedNotePage from "./pages/ArchivedNotePage"
import CreateNotePage from "./pages/CreateNotePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Navbar from "./components/Navbar"
import Toaster from "./components/Toaster"
import { AuthedUserContext } from "./contexts/AuthedUserContext"
import { getUserLogged } from "./utils/api"
import Preload from "./components/Preload"

const App = () => {
  const { authedUser, setAuthedUser } = useContext(AuthedUserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authUser = async () => {
      const { data } = await getUserLogged()
      setAuthedUser(data)
      setTimeout(() => setIsLoading(false), 1000)
    }

    authUser()
  }, [])

  if (isLoading) {
    return <Preload />
  }

  if (!authedUser) {
    return (
      <>
        <Toaster />
        <main className="grid items-center min-h-screen px-3 mx-auto w-full max-w-lg">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Toaster />
      <main className="flex flex-col my-24 px-3 gap-4 mx-auto w-full max-w-7xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedNotePage />} />
          <Route path="/notes/new" element={<CreateNotePage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
