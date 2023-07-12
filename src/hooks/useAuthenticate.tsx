import { useEffect, useState } from 'react'
import { verifyService } from '../services/auth.services'

export const useAuthenticateUser = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const authenticateUser = async (): Promise<void> => {
    setIsFetching(true)
    try {
      const response = await verifyService()
      console.log(response)
      setIsloggedIn(true)
      setLoggedUser(response.data)
      setIsFetching(false)
    } catch (error) {
      setIsloggedIn(false)
      setLoggedUser(null)
      setIsFetching(false)
    }
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  if (isFetching === true) {
    return (
      <div className='App'>
        <h2>
          <span className='visually-hidden'>Loading...</span>
        </h2>
      </div>
    )
  }

  return { authenticateUser, isLoggedIn, loggedUser }
}
