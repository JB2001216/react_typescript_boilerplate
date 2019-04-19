import { observable } from 'dahlia-observable'

export function createStore<T extends object>(obj: T) {
  return observable(obj)
}
