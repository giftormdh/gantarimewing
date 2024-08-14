import Axios from 'axios'

// This is for fetching WITHOUT access token
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const crawler = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRAWLER_URL,
})

const setTokenApi = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
  api.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${token}`
    return req
  })
}

export { api, axios, crawler, setTokenApi }
