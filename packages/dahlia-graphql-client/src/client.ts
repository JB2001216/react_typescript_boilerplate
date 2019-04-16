import { request } from 'dahlia-request'
import { Options, Variables } from './typings'

export class GraphQLClient {
  private options: Options

  constructor(options: Options) {
    this.options = options
  }

  async query<T = any>(input: string, variables?: Variables): Promise<T> {
    const { endpoint, ...rest } = this.options
    const body = { query: input, variables }
    try {
      const res = await request(endpoint, { method: 'POST', body, ...rest })
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
): Promise<T> {
  const client = new GraphQLClient({ endpoint })
  return client.query<T>(input, variables)
}
