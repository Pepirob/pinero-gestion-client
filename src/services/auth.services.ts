import service from './config.services'

const loginService = (credentials: {identifier: string, password: string}) => {
  return service.post('/auth/login', credentials)
}

const verifyService = ():Promise<object> => {
  return service.get('/auth/verify')
}

export { loginService, verifyService }
