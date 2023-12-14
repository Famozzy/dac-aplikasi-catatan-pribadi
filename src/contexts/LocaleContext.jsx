import { createContext, useState, useMemo } from "react"

export const LocaleContext = createContext()

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem("locale") || "ID")

  const toggleLocale = () => {
    const newLocale = locale === "ID" ? "EN" : "ID"
    localStorage.setItem("locale", newLocale)
    setLocale(newLocale)
  }

  const contextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  )

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
}
