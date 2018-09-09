import Vue from 'vue'
import networkUrl from '../../store/config'

let baseUrl = networkUrl
export function post (url, params, dothing) {
  let param = new URLSearchParams()
  let webUrl = baseUrl + url
  for (var i in params) {
    param.append(i, params[i])
  }
  Vue.axios.post(webUrl, param, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  }).then((response) => {
    dothing(response.data)
  })
}
