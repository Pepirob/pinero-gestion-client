import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const { handleLogout } = useLogout()
  return (
    <>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </>
  )
}

export default Logout
