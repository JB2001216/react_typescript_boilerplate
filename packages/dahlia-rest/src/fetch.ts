import { request, Options } from 'dahlia-request'
import { restConfig } from './config'
import { Interceptor } from './types'

export async function fetch<T = any>(url: string, options?: Options): Promise<T> {
  let reqURL: string = url
  let interceptor = {} as Interceptor

  const { endpoint, interceptor: configInterceptors } = restConfig
  const isAbsoluteURL = /http:\/\/|https:\/\//.test(url)
  reqURL = isAbsoluteURL ? url : endpoint + url

  if (configInterceptors) interceptor = configInterceptors

  try {
    let res = await request(reqURL, options)
    if (interceptor.responses) {
      interceptor.responses.forEach(item => {
        res = item(res)
      })
    }
    return res
  } catch (error) {
    throw error
  }
}
