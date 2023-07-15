import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

export const useLogout = () => {
  const redirect = useNavigate()
  const { authenticateUser } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem('authToken')

    authenticateUser()

    redirect('/')
  }
  return { handleLogout }
}
