import {
  OWNED_DOCUMENTS,
  UPDATE_DOC,
  PUBLISHED_DOCS,
  CREATE_DOCUMENT,
  DATA_OF_PUBLISHED_DOC,
  SEARCH_DOCUMENT,
  GET_TITLES,
} from '../constants/constants'
import { getRequest, postRequest, putRequest } from '../utils/http-helper'

export const getProjects = async () => {
  return await getRequest({
    url: OWNED_DOCUMENTS,
    noAuth: true,
  })
}

export const updateProject = async (slug: string, status: string) => {
  return await putRequest({
    url: UPDATE_DOC(slug),
    noAuth: true,
    data: {
      status: status,
    },
  })
}

export const getpublishedProjects = async (userId: string) => {
  return getRequest({
    url: PUBLISHED_DOCS(userId),
  })
}

export const createDocument = async (title: string, description: string) => {
  return await postRequest({
    url: CREATE_DOCUMENT,
    noAuth: true,
    data: {
      name: title,
      description: description,
      font: 'Sans-Serif',
    },
  })
}

export const searchDocument = async (slug: string) => {
  return await getRequest({
    url: DATA_OF_PUBLISHED_DOC(slug),
  })
}

export const queryDocument = async (query: string) => {
  return await getRequest({
    url:SEARCH_DOCUMENT(query)
  })
}

export const getTitlesOfDocument = async (docId: String) => {
  return await getRequest({
    url:GET_TITLES(docId)
  })
}

