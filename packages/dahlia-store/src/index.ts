export { observe } from './observe'
export { createStore } from './store'
export { Observer } from './Observer'

if (typeof Proxy === 'undefined') {
  throw new Error('Require Proxy support.')
}
