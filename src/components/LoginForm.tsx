import { useId, useContext, useState, MouseEvent } from 'react'
import { AuthContext } from '../context/auth.context'
import { useIsFetching } from '../hooks/useIsFetching'
import { useErrorMessage } from '../hooks/useErrorMessage'
import { loginService } from '../services/auth.services'
import { NavigateFunction, useNavigate } from 'react-router'
import { loginMain } from './Login.css'

const LoginForm = () => {
  const redirect: NavigateFunction = useNavigate()
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

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      setIsFetching(true)
      const response = await loginService({ identifier, password })
      const {
        data: { authToken },
      }: { data: { authToken: string } } = response

      localStorage.setItem('authToken', authToken)

      authenticateUser()
      setIsFetching(false)
      redirect('/')
    } catch (error) {
      setIsFetching(false)

      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        redirect('/error')
      }
    }
  }

  return (
    <main className={loginMain}>
      <form>
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
        {errorMessage.length ? <p>{errorMessage}</p> : null}
        <br />
        <button disabled={isFetching} onClick={handleLogin}>
          Acceder
        </button>
      </form>
    </main>
  )
}

export default LoginForm
