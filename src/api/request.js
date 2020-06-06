import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

const bestURL = ''
// const bestURL = 'http://localhost:5000'

export function request(config) {
  const instance = axios.create({
    baseURL: bestURL,
    timeout: 5000,
  })

  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  return instance(config)
}
