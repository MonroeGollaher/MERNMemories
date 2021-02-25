import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000' })

api.interceptors.request.use((req)=> {
  if(localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }

  return req
})

// POST ROUTES
export const fetchPosts = () => api.get('/posts')
export const createPost = (newPost) => api.post('/posts', newPost)
export const updatePost = (id, postData) => api.patch(`/posts/${id}`, postData)
export const deletePost = (id) => api.delete(`/posts/${id}`)
export const likePost = (id) => api.patch(`/posts/${id}/likePost`)

// USER AUTH ROUTES
export const signIn = (formData) => api.post('/user/signin', formData)
export const signUp = (formData) => api.post('/user/signup', formData)