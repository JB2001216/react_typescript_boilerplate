import clients from './clients'
import { graphqlConfig } from './config'
import { Options, Variables } from './types'
import { Interceptor } from './types'

export const query = async <T = any>(input: string, options?: Options) => {
  const defaultOpt = { headers: {} }
  let opt: Options = options || defaultOpt
  let interceptor = {} as Interceptor
  const { interceptor: configInterceptors } = graphqlConfig
  const variables: Variables = opt.variables || {}

  if (configInterceptors) interceptor = configInterceptors

  if (interceptor.requests) {
    interceptor.requests.forEach(item => {
      opt = item(opt) || {}
    })
  }

  try {
    let res = await clients.graphqlClient.query<T>(input, variables)
    if (interceptor.responses) {
      interceptor.responses.forEach(item => {
        res = item(res)
      })
    }
    return res
  } catch (error) {
    throw error
  }
}
