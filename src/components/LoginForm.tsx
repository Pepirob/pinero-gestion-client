import { useId, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'
import { useIsFetching } from '../hooks/useIsFetching'
import { useErrorMessage } from '../hooks/useErrorMessage'

const LoginForm = () => {
  const emailId = useId()
  const passwordId = useId()
  const { authenticateUser } = useContext(AuthContext)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const { errorMessage, setErrorMessage } = useErrorMessage()
  const { isFetching, setIsFetching } = useIsFetching()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === emailId) {
      setIdentifier(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  return (
    <>
      <form action=''>
        <label htmlFor={emailId}>Correo Electrónico: </label>
        <input
          id={emailId}
          value={identifier}
          type='text'
          autoComplete='email'
          onChange={handleInput}
        />
        <br />
        <label htmlFor={passwordId}>Contraseña: </label>
        <input
          id={passwordId}
          type='password'
          value={password}
          autoComplete='current-password'
          onChange={handleInput}
        />
        <br />
        <button>Acceder</button>
      </form>
    </>
  )
}

export default LoginForm
