import fetch from 'cross-fetch'
import { dahliaHttpConfig } from './config'

export const request = async <T extends any>(path: string): Promise<T> => {
  const { endpoint } = dahliaHttpConfig.rest
  const url = /http:\/\/|https:\/\//.test(path) ? path : endpoint + path
  try {
    const res = await fetch(url)
    if (res.status >= 400) {
      throw new Error('Bad response from server')
    }
    const data: T = await res.json()
    return data
  } catch (error) {
    return error
  }
}
