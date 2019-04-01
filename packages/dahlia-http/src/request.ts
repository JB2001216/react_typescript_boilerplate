import fetch from 'cross-fetch'
import { dahliaHttpConfig, Interceptor } from './config'
import { Options } from './types'

// default post with json
const methods = ['POST', 'PUT', 'PATCH', 'DELETE']

function getDefaultOpt(options: Options = {}): Options {
  const baseOpt = { headers: {} } as Options
  const { method } = options
  if (method && methods.includes(method)) {
    baseOpt.headers = {
      'content-type': 'application/json; charset=utf-8',
    }
  }
  return baseOpt
}

function getOpt(options?: Options) {
  const defaultOpt = getDefaultOpt(options)
  if (!options) return defaultOpt
  const { headers } = options
  options.headers = { ...defaultOpt.headers, ...headers }
  return options
}

export const request = async <T extends any>(url: string, options?: Options): Promise<T> => {
  let reqURL: string = url
  let interceptor = {} as Interceptor

  if (dahliaHttpConfig.rest) {
    const { endpoint, interceptor: configInterceptors } = dahliaHttpConfig.rest
    const isAbsoluteURL = /http:\/\/|https:\/\//.test(url)
    reqURL = isAbsoluteURL ? url : endpoint + url

    if (configInterceptors) {
      interceptor = configInterceptors
    }
  }

  const opt = getOpt(options)

  try {
    const res = await fetch(reqURL, opt)
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }

    const data: T = await res.json()
    let responseData: T = data

    if (interceptor.responses) {
      interceptor.responses.forEach(item => {
        responseData = item(responseData)
      })
    }

    return responseData
  } catch (error) {
    return error
  }
}
