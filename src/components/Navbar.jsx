import { useContext } from "react"
import { ArchiveBox, Moon, Note, NoteBlank, SignOut, SunDim, Translate } from "@phosphor-icons/react"
import NavLink from "./NavLink"
import NavButton from "./NavButton"
import { AuthedUserContext } from "../contexts/AuthedUserContext"
import { LocaleContext } from "../contexts/LocaleContext"
import { ThemeContext } from "../contexts/ThemeContext"
import locales from "../utils/locales"

export default function Navbar() {
  const { clearAuthedUser } = useContext(AuthedUserContext)
  const { locale, toggleLocale } = useContext(LocaleContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navLinkList = [
    {
      name: locales[locale].navHome,
      path: "/",
      icon: <Note size={24} />,
    },
    {
      name: locales[locale].navArchive,
      path: "/archived",
      icon: <ArchiveBox size={24} />,
    },
    {
      name: locales[locale].navCreate,
      path: "/notes/new",
      icon: <NoteBlank size={24} />,
    },
  ]

  const navButtonList = [
    {
      name: theme === "dark" ? locales[locale].navDark : locales[locale].navLight,
      handleClick: toggleTheme,
      icon: theme === "dark" ? <SunDim size={24} /> : <Moon size={24} />,
    },
    {
      name: locale,
      handleClick: toggleLocale,
      icon: <Translate size={24} />,
    },
    {
      name: locales[locale].navLogout,
      handleClick: clearAuthedUser,
      icon: <SignOut size={24} />,
    },
  ]

  return (
    <header
      className="fixed w-full top-0 bg-gray-100/30 dark:bg-gray-800
    m-auto mb-4 py-5 px-3 border backdrop-blur-sm dark:bg-gray-900/30 dark:border-gray-700"
    >
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
