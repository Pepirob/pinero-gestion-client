import { createContext } from 'react'
import { useAuthenticateUser } from '../hooks/useAuthenticate'
import { User } from '../types'

interface AuthContextType {
  authenticateUser: () => void
  isLoggedIn: boolean
  loggedUser: User | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthWrapper = (props: React.PropsWithChildren<object>) => {
  const { authenticateUser, isLoggedIn, loggedUser } =
    useAuthenticateUser()

  const contextValue: AuthContextType = {
    authenticateUser,
    isLoggedIn,
    loggedUser
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthWrapper }
