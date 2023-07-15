import { useContext, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

interface IsPrivateProps {
  children: ReactNode
}

const IsPrivate = (props: IsPrivateProps) => {
  const { isLoggedIn } = useContext(AuthContext)
  if (isLoggedIn === undefined) return null

  if (isLoggedIn) {
    return props.children
  } else {
    return <Navigate to='/login' />
  }
}

export default IsPrivate
