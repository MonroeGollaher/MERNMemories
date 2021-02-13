import axios from 'axios'

const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:5000' : ''

export const api = axios.create({
  baseURL,
  timeout: 8000
})