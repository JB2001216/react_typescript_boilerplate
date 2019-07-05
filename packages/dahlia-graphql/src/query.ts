import { GraphQLClient } from 'dahlia-graphql-client'
import { graphqlConfig } from './config'
import { Options, Variables } from './types'

export const query = async <T = any>(input: string, options?: Options) => {
  let variables: Variables = {}
  let headers: any = {}
  const endpoint = graphqlConfig.endpoint
  if (options) {
    variables = options.variables || {}
    headers = options.headers || {}
  }

  try {
    const client = new GraphQLClient({ endpoint, headers })
    const data = await client.query<T>(input, variables)
    return data
  } catch (error) {
    throw error
  }
}
