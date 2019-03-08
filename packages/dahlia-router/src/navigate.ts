import { dispatch } from './routerStore'

export default function navigate(to: string, replace?: boolean) {
  dispatch(A => A.go, { path: to, replace })
}
