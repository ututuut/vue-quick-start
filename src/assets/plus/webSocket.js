import Vue from 'vue'

export function send (params, dothing) {
  let param = new URLSearchParams()
  for (var i in params) {
    param.append(i, params[i])
  }
  Vue.$socket.emit('add', param)
  dothing()
}

export function get (params, dothing) {
  let param = new URLSearchParams()
  for (var i in params) {
    param.append(i, params[i])
  }
  Vue.$socket.emit('get', param, (response) => {
    dothing(response)
  })
}
