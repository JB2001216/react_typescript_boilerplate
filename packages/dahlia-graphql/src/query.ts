import { query as q } from 'dahlia-graphql-client'
import { graphqlConfig } from './config'
import { Options, Variables } from './types'

export const query = async <T = any>(input: string, options?: Options) => {
  let variables: Variables = {}
  const endpoint = graphqlConfig.endpoint
  if (options) {
    variables = options.variables || {}
  }
  try {
    const data = await q<T>(endpoint, input, variables)
    return data
  } catch (error) {
    throw error
  }
}
