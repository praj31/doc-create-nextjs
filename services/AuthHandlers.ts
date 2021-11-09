import { postRequest } from '../utils/http-helper'
import { LOGIN_URL } from '../constants/constants'

export const LoginHandler = async (email: string, password: string): Promise<any> => {
  return await postRequest({
    url: LOGIN_URL,
    data: {
      email: email,
      password: password,
    },
  })
}

export const LogoutHandler = async (): Promise<any> => {
  return await postRequest({
    url: LOGIN_URL,
    noAuth: true,
  })
}
