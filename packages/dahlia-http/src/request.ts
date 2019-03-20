import fetch from 'cross-fetch'
import { dahliaHttpConfig, Interceptor } from './config'

export const request = async <T extends any>(url: string): Promise<T> => {
  let reqURL: string = url
  let interceptors: Interceptor[] = []

  if (dahliaHttpConfig.rest) {
    const { endpoint, interceptors: configInterceptors } = dahliaHttpConfig.rest
    const isAbsoluteURL = /http:\/\/|https:\/\//.test(url)
    reqURL = isAbsoluteURL ? url : endpoint + url

    if (configInterceptors) {
      interceptors = configInterceptors
    }
  }

  try {
    const res = await fetch(reqURL)
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }

    const data: T = await res.json()
    let responseData: T = data

    interceptors.forEach(item => {
      if (!item.response) return
      responseData = item.response(responseData)
    })

    return responseData
  } catch (error) {
    return error
  }
}
