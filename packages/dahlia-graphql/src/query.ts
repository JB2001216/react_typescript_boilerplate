import { GraphQLClient } from 'dahlia-graphql-client'
import { graphqlConfig } from './config'
import { Options, Variables } from './types'
import { Interceptor } from './types'

export const query = async <T = any>(input: string, options?: Options) => {
  let opt: any
  let interceptor = {} as Interceptor
  const { endpoint, interceptor: configInterceptors } = graphqlConfig

  let variables: Variables = {}
  let headers: any = {}
  if (options) {
    variables = options.variables || {}
    headers = options.headers || {}
  }

  if (configInterceptors) interceptor = configInterceptors

  if (interceptor.requests) {
    interceptor.requests.forEach(item => {
      // TODO:
      opt = options
        ? options
        : {
            headers: {},
          }
      opt = {
        ...opt,
        ...item(opt as any),
      }
    })
  }

  try {
    const client = new GraphQLClient({ endpoint, headers: { ...headers, ...opt.headers } })
    const data = await client.query<T>(input, variables)
    return data
  } catch (error) {
    throw error
  }
}
