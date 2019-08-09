import { request } from 'dahlia-request'
import { Options, Variables, Headers } from './typings'

export interface QueryOptions {
  headers?: Headers
}

export class GraphQLClient {
  private options: Options

  constructor(options: Options) {
    this.options = options
  }

  async query<T = any>(input: string, variables?: Variables, options?: QueryOptions): Promise<T> {
    const { endpoint, headers = {} } = this.options
    const { headers: queryOptionsHeaders = {} } = options || ({} as QueryOptions)
    const body = { query: input, variables }
    try {
      const res = await request(endpoint, {
        method: 'POST',
        body,
        headers: { ...headers, ...queryOptionsHeaders },
      })
      if (res.data) return res.data
      throw res
    } catch (error) {
      throw error
    }
  }
}

export async function query<T = any>(
  endpoint: string,
  input: string,
  variables?: Variables,
  options?: QueryOptions,
): Promise<T> {
  const client = new GraphQLClient({ endpoint })
  return client.query<T>(input, variables, options)
}
