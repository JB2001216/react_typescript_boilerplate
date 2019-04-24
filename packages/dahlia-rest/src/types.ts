import { Options as RequestOptions } from 'dahlia-request'

export type Update = (updateOptions?: Options) => any

export interface Param {
  [key: string]: string | number | boolean
}
export interface Options extends RequestOptions {
  name?: string
  param?: Param
}

export type Refetch = (options?: Options) => void

export interface FetchResult<T> {
  loading: boolean | undefined
  data: T
  error: any
}

export interface UpdateResult<T> {
  loading: boolean | undefined
  data: T
  error: any
}

export type RequestInterceptor = (config: any) => any
export type RequestErrorInterceptor = (config: any) => any
export type ResponseInterceptor = (error: any) => any
export type ResponseErrorInterceptor = (error: any) => any

export interface Interceptor {
  requests?: RequestInterceptor[]
  requestErrors?: RequestErrorInterceptor[]
  responses?: ResponseInterceptor[]
  responseErrors?: ResponseErrorInterceptor[]
}

export interface RestConfig {
  endpoint: string
  interceptor?: Interceptor
  headers?: HeadersInit
}

export interface Fetcher {
  [key: string]: {
    refetch: Refetch
  }
}

export interface HooksResult<T> extends FetchResult<T> {
  refetch: Refetch
}

export type Deps = ReadonlyArray<any>
