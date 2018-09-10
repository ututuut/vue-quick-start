export default class Storage {
  save (key, item) {
    localStorage.setItem(key, item)
  }
  select (key) {
    return localStorage.getItem(key)
  }
  clear () {
    localStorage.clear()
  }
  removeItem () {
    localStorage.removeItem()
  }
}
