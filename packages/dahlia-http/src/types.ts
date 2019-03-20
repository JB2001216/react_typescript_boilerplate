export interface Options {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: string
  headers?: {
    [key: string]: string
  }
  credentials?: 'omit' | 'same-origin' | 'include'
}

export interface Variables {
  [key: string]: any
}

export type Mutate = (variables: Variables) => any

export type Update = () => any

export interface QueryResult<T> {
  loading: boolean | undefined
  data: T
  error: any
  refetch: (variables?: Variables) => any
}

export interface MutateResult<T> {
  loading: boolean | undefined
  data: T
  error: any
}

export interface FetchResult<T> {
  loading: boolean | undefined
  data: T
  error: any
  refetch: (url: string) => any
}

export interface UpdateResult<T> {
  loading: boolean | undefined
  data: T
  error: any
}
