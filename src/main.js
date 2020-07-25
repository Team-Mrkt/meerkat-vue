import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './scss/main.scss'

// Setting API URL and header based on environment for http requests
axios.defaults.baseURL = "http://api.com"
axios.defaults.timeout = 6000
const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken
}

// Setting reponse interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) { // Handling expired api tokens
    store.dispatch('logOut')
    router.push('/')
  } else {
    return Promise.reject(error)
  }
})

createApp(App).mount('#app')
