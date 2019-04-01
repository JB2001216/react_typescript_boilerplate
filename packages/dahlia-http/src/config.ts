export type RequestInterceptor = (config: any) => any
export type RequestErrorInterceptor = (config: any) => any
export type ResponseInterceptor = (error: any) => any
export type ResponseErrorInterceptor = (error: any) => any

export interface Interceptor {
  requests?: RequestInterceptor[]
  requestErrors?: RequestErrorInterceptor[]
  responses?: ResponseInterceptor[]
  responseErrors?: ResponseErrorInterceptor[]
}

export interface DahliaHttpConfig {
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
    interceptor?: Interceptor
  }
}

export let dahliaHttpConfig = {
  graphql: {
    endpoint: '/graphql',
  },
  rest: {
    endpoint: '/',
  },
} as DahliaHttpConfig

export function config(options: DahliaHttpConfig) {
  dahliaHttpConfig = { ...dahliaHttpConfig, ...options }
}
