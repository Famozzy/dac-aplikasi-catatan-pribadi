import { useContext } from "react"
import { ArchiveBox, Note, NoteBlank, SignOut, SunDim, Translate } from "@phosphor-icons/react"
import NavLink from "./NavLink"
import NavButton from "./NavButton"
import { AuthedUserContext } from "../contexts/AuthedUserContext"

export default function Navbar() {
  const { clearAuthedUser } = useContext(AuthedUserContext)

  const navLinkList = [
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

  const navButtonList = [
    {
      name: "Gelap",
      handleClick: () => alert("theme"),
      icon: <SunDim size={24} />,
    },
    {
      name: "ID",
      handleClick: () => alert("locale"),
      icon: <Translate size={24} />,
    },
    {
      name: "Logout",
      handleClick: clearAuthedUser,
      icon: <SignOut size={24} />,
    },
  ]

  return (
    <header className="fixed w-full top-0 bg-gray-900/30 m-auto mb-4 py-5 px-3 border border-gray-700 backdrop-blur-sm">
      <nav className="w-full flex justify-end gap-3 Links-center max-w-4xl m-auto font-medium text-base sm:text-xs sm:justify-evenly">
        {navLinkList.map((nav, index) => (
          <NavLink key={index} name={nav.name} path={nav.path} icon={nav.icon} />
        ))}
        {navButtonList.map((nav, index) => (
          <NavButton key={index} onClick={nav.handleClick}>
            {nav.icon} {nav.name}
          </NavButton>
        ))}
      </nav>
    </header>
  )
}
