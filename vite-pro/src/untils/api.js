import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const register = async (email, password, nickname) => {
  return api.post('/users/sign_up', {
    email,
    password,
    nickname,
  })
}

export const login = async (email, password) => {
  return api.post('/users/sign_in', {
    email,
    password,
  })
}
