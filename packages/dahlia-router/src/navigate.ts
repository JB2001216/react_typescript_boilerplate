import store from './routerStore'

export default function navigate(to: string, replace?: boolean) {
  store.go({ path: to, replace })
}
