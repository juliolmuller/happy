import axios from 'axios'

const API_URL = 'http://192.168.15.6:3030/api'

const api = axios.create({
  baseURL: API_URL,
})

export default api
