export let dahliaHttpConfig = {
  graphql: {
    endpoint: '/graphql',
  },
  rest: {
    endpoint: '/',
  },
}

export function config(options: Partial<typeof dahliaHttpConfig>) {
  dahliaHttpConfig = { ...dahliaHttpConfig, ...options }
}
