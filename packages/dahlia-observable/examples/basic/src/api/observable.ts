import { handler } from '../core/handler'
import { canObservable } from '../utils/canObservable'
import { globalState } from '../core/globalState'
import { action } from '../api/action'

export function toObservable<T extends object>(obj: T) {
  const fnKeys = Object.keys(obj).reduce(
    (result, key) =>
      typeof obj[key] === 'function' ? [...result, key] : result,
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

  const observable: T = new Proxy(obj, handler)

  globalState.proxies.set(obj, observable)
  globalState.raws.set(observable, obj)
  return observable
}

export function observable<T extends object>(obj: T) {
  if (!canObservable(obj)) return obj

  const object: T = globalState.proxies.get(obj) || toObservable(obj)
  return object
}
