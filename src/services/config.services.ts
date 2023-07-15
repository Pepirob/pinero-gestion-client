import axios, { AxiosInstance } from 'axios'

const baseURL = typeof process !== 'undefined' ? process.env.SERVER_URL : 'http://localhost:5005/api'

const service: AxiosInstance = axios.create({
  baseURL
})

service.interceptors.request.use((config) => {
  const storedToken: string = localStorage.getItem('authToken')
  const tokenAndType = `Bearer ${storedToken}`

  if (storedToken) {
    config.headers.authorization = tokenAndType
  }
  return config
})

export default service
