import axios from 'axios'

console.log('base URL', process.env.VUE_APP_BASE_URL)
export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})
