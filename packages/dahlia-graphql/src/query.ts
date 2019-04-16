import { query as q } from 'dahlia-graphql-client'
import { graphqlConfig } from './config'
import { Variables } from './types'

export const query = async <T = any>(input: string, variables?: Variables) => {
  const endpoint = graphqlConfig.endpoint
  try {
    const data = await q<T>(endpoint, input, variables)
    return data
  } catch (error) {
    throw error
  }
}
