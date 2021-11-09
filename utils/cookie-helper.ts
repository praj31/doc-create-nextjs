import Cookie from 'js-cookie'

export const getCookie = (key: any) => {
  const storage = Cookie.get(key)
  return storage || ''
}

export const getJSONCookie = (key: any) => {
  const value = Cookie.get(key)
  if (value === undefined) return
  const json = JSON.parse(value)
  return json
}

export const deleteCookie = (key: any) => {
  Cookie.remove(key)
  return getCookie(key) === ''
}

export const saveCookie = (key: any, value: any, options = {}) => {
  Cookie.set(key,value, options)
  return getCookie(key) !== ''
}

export const saveJSONCookie = (key: any, value: any, options = {}) => {
  Cookie.set(key, JSON.stringify(value), options)
  return getCookie(key) !== ''
}
