import {
  ONGOING_PAGE_DATA,
  UPDATE_PAGE,
  PUBLISHED_PAGE_DATA,
  CREATE_PAGE,
} from '../constants/constants'
import { getRequest, postRequest, putRequest } from '../utils/http-helper'

export const getPageData = async (slug: string) => {
  return await getRequest({
    url: ONGOING_PAGE_DATA(slug),
    noAuth: true,
  })
}

export const updatePageData = async (slug: string, data: any) => {
  return await putRequest({
    url: UPDATE_PAGE(slug),
    noAuth: true,
    data: {
      content: data,
    },
  })
}

export const finalPagedata = async (slug: string) => {
  return await getRequest({
    url: PUBLISHED_PAGE_DATA(slug),
  })
}

export const createPageHandler = async (incomingData: any) => {
  return await postRequest({
    url: CREATE_PAGE,
    noAuth: true,
    data: incomingData,
  })
}
