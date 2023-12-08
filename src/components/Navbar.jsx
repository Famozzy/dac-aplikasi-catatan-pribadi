import { ArchiveBox, Note, NoteBlank } from "@phosphor-icons/react"
import NavItem from "./NavItem"

export default function Navigation() {
  const navList = [
    {
      name: "Catatan Saya",
      path: "/",
      icon: <Note size={24} />,
    },
    {
      name: "Arsip",
      path: "/archived",
      icon: <ArchiveBox size={24} />,
    },
    {
      name: "Buat Catatan",
      path: "/notes/new",
      icon: <NoteBlank size={24} />,
    },
  ]

  return (
    <header className="fixed w-full top-0 bg-gray-900/30 m-auto mb-4 py-5 px-3 border border-gray-700 backdrop-blur-sm">
      <nav className="w-full flex gap-3 justify-end items-center max-w-xl m-auto font-medium text-base sm:text-xs sm:justify-evenly">
        {navList.map((nav, index) => (
          <NavItem key={index} name={nav.name} path={nav.path} icon={nav.icon} />
        ))}
      </nav>
    </header>
  )
}
