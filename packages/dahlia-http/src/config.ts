export interface Interceptor {
  request?: (data: any) => any
  response?: (data: any) => any
}

export interface DahliaHttpConfig {
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
    interceptors?: Array<{
      request?: (data: any) => any
      response?: (data: any) => any
    }>
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
  console.log('optins:', options);
  dahliaHttpConfig = { ...dahliaHttpConfig, ...options }
}
