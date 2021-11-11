import { ONGOING_PAGE_DATA, UPDATE_PAGE } from '../constants/constants'
import { getRequest, putRequest } from '../utils/http-helper'

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
