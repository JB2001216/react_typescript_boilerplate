import { Interceptor } from './types'
export interface RestConfig {
  endpoint: string
  interceptor?: Interceptor
  headers?: HeadersInit
}

export let restConfig = {
  endpoint: location.protocol + '//' + location.host,
} as RestConfig

export function config(options: RestConfig) {
  restConfig = { ...restConfig, ...options }
}
