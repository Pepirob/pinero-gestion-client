import { createContext } from 'react'
import { useAuthenticateUser } from '../hooks/useAuthenticate'
import { User } from '../types'

interface AuthContextType {
  authenticateUser: () => void
  isLoggedIn: boolean
  loggedUser: User | null
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: any) => {
  const { authenticateUser, isLoggedIn, loggedUser } = useAuthenticateUser()
  return (
    <AuthContext.Provider value={{ authenticateUser, isLoggedIn, loggedUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
