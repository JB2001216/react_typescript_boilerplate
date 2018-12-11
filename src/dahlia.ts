import { requestHooks } from 'request-hooks'

interface Options {
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
  }
}

export const dahlia = {
  init(options: Options) {
    console.log('options:', options)
    requestHooks.init(options)
  },
}
