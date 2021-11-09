export const AUTH_KEY = 'token'

export const BASE_URL = 'http://localhost:8080'

export const LOGIN_URL = `${BASE_URL}/auth/login`

export const LOGOUT_URL = `${BASE_URL}/auth/logout`

export const CREATE_USER = `${BASE_URL}/users`

export const SEARCH_USER_USING_USERNAME = `${BASE_URL}/users`

export const SEARCH_USERS = (query: string) => {
  return `${BASE_URL}/users/search?search=${query}`
}

export const UPDATE_USER = `${BASE_URL}/users`

export const DELETE_USER = `${BASE_URL}/users`

export const CREATE_BOOKMARK = `${BASE_URL}/users/create-bookmark`

export const DELETE_BOOKMARK = `${BASE_URL}/users/delete-bookmark`

export const CREATE_DOCUMENT = `${BASE_URL}/documents/create-document`

export const SEARCH_DOCUMENT = (query: string) => {
  return `${BASE_URL}/documents/search?query=${query}`
}

export const OWNED_DOCUMENTS = `${BASE_URL}/documents/my-documents`

export const DATA_OF_PUBLISHED_DOC = (slug: string): string => {
  return `${BASE_URL}/documents/document/${slug}`
}

export const UPDATE_DOC = (slug: string): string => {
  return `${BASE_URL}/documents/${slug}`
}

export const PUBLISHED_DOCS = (userId: string): string => {
  return `${BASE_URL}/documents/published-documents/${userId}`
}

export const DELETE_DOC = (slug: string): string => {
  return `${BASE_URL}/documents/${slug}`
}

export const CREATE_PAGE = `${BASE_URL}/page/create-page`

export const GET_TITLES = (slug: string): string => {
  return `${BASE_URL}/page/getTitles/${slug}`
}

export const GET_PAGE_DATA = (slug: string): string => {
  return `${BASE_URL}/page/${slug}`
}

export const UPDATE_PAGE = (slug: string): string => {
  return `${BASE_URL}/page/${slug}`
}

export const DELETE_PAGE = (slug: string): string => {
  return `${BASE_URL}/page/${slug}`
}

export const CHANGE_ORDER = (docslug: string): string => {
  return `${BASE_URL}/page/change-order/${docslug}`
}

export const FORK_DOCUMENT = (docslug: string): string => {
  return `${BASE_URL}/documents/fork/${docslug}`
}
