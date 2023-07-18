import { useNavigate } from 'react-router'

export const useRedirect = () => {
  const navigate = useNavigate()

  const redirect = (path: string) => {
    navigate(path)
  }

  return { redirect }
}
