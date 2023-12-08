import { ArchiveBox, Note } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import NavItem from "./NavItem"

export default function Navigation() {
  const navList = [
    {
      name: "Catatan Saya",
      path: "/",
      icon: <Note size={24} className="inline-block mr-1" />,
    },
    {
      name: "Arsip",
      path: "/archived",
      icon: <ArchiveBox size={24} className="inline-block mr-1" />,
    },
  ]

  return (
    <header className="fixed w-full top-0 bg-gray-900/30 m-auto mb-4 py-5 px-3 border border-gray-700 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-xl m-auto font-medium">
        <div className="font-semibold text-2xl w-1/3">Notto</div>
        <div className="w-2/3 flex gap-x-5 text-base justify-end sm:gap-x-3 sm:text-sm">
          {navList.map((nav, index) => (
            <NavItem key={index} name={nav.name} path={nav.path} icon={nav.icon} />
          ))}
        </div>
      </nav>
    </header>
  )
}
