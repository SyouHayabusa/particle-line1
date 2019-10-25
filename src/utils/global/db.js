const ls = localStorage;
const ss = sessionStorage;
const db = {
  $ls: {
    get(key) {
      try {
        return JSON.parse(ls.getItem(key))
      } catch (error) {
        return ls.getItem(key);
      }
    },
    set(key, val) {
      ls.setItem(key, JSON.stringify(key))
    },
    remove(key, val) {
      ls.removeItem(key)
    },
    clear() {
      ls.clear()
    }
  },
  $ss: {
    get(key) {
      try {
        return JSON.parse(ss.getItem(key))
      } catch (err) {
        return ss.getItem(key)
      }
    },
    set(key, value) {
      ss.setItem(key, JSON.stringify(value))
    },
    remove(key) {
      ss.removeItem(key)
    },
    clear() {
      ss.clear()
    }
  }
}

export default db;
