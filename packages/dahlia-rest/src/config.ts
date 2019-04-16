import { RestConfig } from './types'

export let restConfig = {
  endpoint: location.protocol + '//' + location.host,
} as RestConfig

export function config(options: RestConfig) {
  restConfig = { ...restConfig, ...options }
}
