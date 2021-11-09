import axios from 'axios'

import { getCookie, saveCookie } from './cookie-helper'

export const sendRequest = async (args: any): Promise<any> => {
  try {
    const { url, headers, noAuth, data } = args
    let headerParams
    if (noAuth) {
      if (headers) {
        headerParams = {
          ...headers,
          Authorization: `${await getCookie('token')}`,
        }
      } else {
        headerParams = {
          Authorization: `${await getCookie('token')}`,
        }
      }
    }

    const response = await axios({
      ...args,
      headers: headerParams,
      url: url,
      params: data,
    })
    return response
  } catch (error: any) {
    console.log(error)
  }
}

export const getRequest = async (args: any) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'get',
  })
  if (status === 200) {
    return {
      data,
      error: null,
      headers,
      status,
    }
  }
  return {
    data,
    error: error || data,
    status,
  }
}

export const postRequest = async (args: any) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'post',
  })

  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status,
    }
  }
  return {
    data: null,
    error: error || data,
    status,
  }
}

export const deleteRequest = async (args: any) => {
  const { data, error, status, headers } = await sendRequest({
    ...args,
    method: 'delete',
  })
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status,
    }
  }
  return {
    data: null,
    error: error || data,
    status,
  }
}

export const putRequest = async (args: any) => {
  const { data, error, status, headers } = await sendRequest({
    ...args,
    method: 'put',
  })
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status,
    }
  }
  return {
    data: null,
    error: error || data,
    status,
  }
}
