import service from './config.services'

const createClientService = (client: object) => {
  return service.post('/client/new', client)
}

export { createClientService }
