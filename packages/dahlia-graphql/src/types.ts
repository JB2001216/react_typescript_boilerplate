export interface Options {
  [key: string]: any
}

export type Refetch = <T>(options?: Options) => Promise<T>

export type Deps = ReadonlyArray<any>

export interface Options {
  name?: string
  variables?: Options
  deps?: Deps
}

export type Mutate = (options: Options) => any

export interface QueryResult<T> {
  loading: boolean
  data: T
  error: any
  refetch: Refetch
}

export interface MutateResult<T> {
  loading: boolean
  data: T
  error: any
}

export interface GraphqlConfig {
  endpoint: string
}
export interface Fetcher {
  [key: string]: {
    refetch: Refetch
  }
}
