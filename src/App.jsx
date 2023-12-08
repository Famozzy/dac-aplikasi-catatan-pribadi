import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import NoteDetailPage from "./pages/NoteDetailPage"
import ArchivedNotePage from "./pages/ArchivedNotePage"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col my-24 px-3 gap-4 mx-auto w-full max-w-[1400px] xl:flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedNotePage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
