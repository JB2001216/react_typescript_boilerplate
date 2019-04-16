import fetch from 'cross-fetch'
import { stringify } from 'qs'
import { Options, Body } from './types'

// method with json
const methods = ['POST', 'PUT', 'PATCH', 'DELETE']

function getDefaultOpt(options: Options = {}): RequestInit {
  const baseOpt = { headers: {} } as Options
  const { method } = options
  const isJsonTypeMethod = method && methods.includes(method)
  if (isJsonTypeMethod) {
    baseOpt.headers = { 'content-type': 'application/json; charset=utf-8' }
  }
  return baseOpt as RequestInit
}

function getURL(url: string, options?: Options) {
  const qs = getQueryString(options)
  if (!qs) return url
  const connector = url.indexOf('?') > -1 ? '' : '?'
  return url + connector + qs
}

function getQueryString(options?: Options) {
  if (!options || !options.query) return null
  return stringify(options.query)
}

function getBody(body?: Body): Body {
  if (!body) return null
  const isJsonObject =
    typeof body && (body.constructor.name === 'Object' || body.constructor.name === 'Array')
  if (isJsonObject) return JSON.stringify(body)
  return body
}

function getOpt(options?: Options): RequestInit {
  const defaultOpt = getDefaultOpt(options)
  if (!options) return defaultOpt
  const body = getBody(options.body)
  if (body) options.body = body
  const { headers } = options
  options.headers = { ...defaultOpt.headers, ...headers }
  return options as RequestInit
}

export async function request<T = any>(url: string, options?: Options): Promise<T> {
  const input = getURL(url, options)
  const init = getOpt(options)

  try {
    const response = await fetch(input, init)
    if (response.status >= 200 && response.status < 300) {
      // TODO: should handle not json response
      const data: T = await response.json()
      return data
    } else {
      throw response
    }
  } catch (error) {
    throw error
  }
}
