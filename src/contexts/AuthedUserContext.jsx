import { createContext, useState, useMemo } from "react"
import { getUserLogged, putAccessToken } from "../utils/api"

export const AuthedUserContext = createContext()

export function AuthedUserProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null)

  const setUserLogged = async ({ accessToken }) => {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setAuthedUser(data)
  }

  const clearAuthedUser = async () => {
    putAccessToken("")
    setAuthedUser(null)
  }

  const contextValue = useMemo(
    () => ({
      authedUser,
      setAuthedUser,
      setUserLogged,
      clearAuthedUser,
    }),
    [authedUser]
  )

  return <AuthedUserContext.Provider value={contextValue}>{children}</AuthedUserContext.Provider>
}
