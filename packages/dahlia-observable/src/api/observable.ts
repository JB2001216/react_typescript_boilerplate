import { canObservable } from '../utils/canObservable'
import { action } from './action'
import { globalState } from '../core/globalState'
import { invokeRunners } from '../core/invokeRunners'

export function observable<T extends object>(obj: T): T
export function observable<T extends object>(obj: T, root?: boolean): T

export function observable<T extends object>(obj: T, root?: boolean) {
  if (root === undefined) root = true

  if (!canObservable(obj)) return obj

  const object: T = globalState.proxies.get(obj) || toObservable(obj, root)
  return object
}

export const handler: ProxyHandler<any> = {
  get(target, key, receiver) {
    globalState.collections.set(target, key)
    const value = Reflect.get(target, key, receiver)
    const observableValue = globalState.proxies.get(value)

    if (typeof value === 'object') {
      return observableValue ? observableValue : observable(value, false)
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

export function toObservable<T extends object>(obj: T, init: boolean) {
  // handle root object
  if (init) {
    // delay for getter
    setTimeout(() => {
      proxyAction(obj)
    }, 0)
  }

  const observable: T = new Proxy(obj, handler)

  globalState.proxies.set(obj, observable)
  globalState.raws.set(observable, obj)
  return observable
}

function proxyAction(obj: any) {
  const fnKeys = Object.keys(obj).reduce(
    (result, key) => {
      const isFn = typeof obj[key] === 'function'
      return isFn ? [...result, key] : result
    },
    [] as string[],
  )

  for (const key of fnKeys) {
    const fn = obj[key]
    obj[key] = new Proxy(fn, {
      apply: (target, thisArgs, argArray) => {
        action(() => Reflect.apply(target, thisArgs, argArray))
      },
    })
  }
}
