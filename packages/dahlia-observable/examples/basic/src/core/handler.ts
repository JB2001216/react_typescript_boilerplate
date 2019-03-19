import { observable } from '../api/observable'
import { globalState } from './globalState'
import { invokeRunners } from './invokeRunners'

export const handler: ProxyHandler<any> = {
  get(target, key, receiver) {
    globalState.collections.set(target, key)
    const value = Reflect.get(target, key, receiver)
    const observableValue = globalState.proxies.get(value)
    if (typeof value === 'object') {
      return observableValue ? observableValue : observable(value)
    }
    return value
  },

  set(target, key, value, receiver) {
    const oldValue = Reflect.get(target, key, receiver)
    const result = Reflect.set(target, key, value, receiver)

    if (globalState.collections.get(target) || value !== oldValue) {
      invokeRunners()
    }

    return result
  },

  deleteProperty(target, key) {
    const hasKey = Reflect.has(target, key)
    const result = Reflect.deleteProperty(target, key)

    if (hasKey) invokeRunners()

    return result
  },

}
