import { getRequest } from '../utils/http-helper'
import { GET_USER_DETAILS, SEARCH_USERS } from '../constants/constants'

export const searchUser = async (user: string) => {
  return await getRequest({
    url: SEARCH_USERS(user),
  })
}

export const getUserDetailsByUsername = async (username: string) => {
  return await getRequest({
    url: GET_USER_DETAILS(username),
  })
}
