import { getRequest } from "../utils/http-helper"
import { SEARCH_USERS } from '../constants/constants'

export const searchUser = async (user: string) => {
    return await getRequest({
      url: SEARCH_USERS(user),
    })
}