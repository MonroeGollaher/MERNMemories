import axios from 'axios'

const url = window.location.origin.includes('localhost') ? 'http://localhost:5000/posts' : ''

export const fetchPosts = () => axios.get(url)
// export const api = axios.create({
//   baseURL,
//   timeout: 8000
// })