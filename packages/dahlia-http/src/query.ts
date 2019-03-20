import { query as geryQuery } from 'gery'
import { dahliaHttpConfig } from './config'
import { Variables } from './types'

export const query = async <T extends any>(gqlStr: string, variables?: Variables) => {
  let endpoint = ''
  if (dahliaHttpConfig.graphql) {
    endpoint = dahliaHttpConfig.graphql.endpoint
  }

  const data = await geryQuery<T>(endpoint, gqlStr, variables)

  return data
}
