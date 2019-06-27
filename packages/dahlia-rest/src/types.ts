import { Options as RequestOptions } from 'dahlia-request'

export type Update = (updateOptions?: RequestOptions) => any

export interface Param {
  [key: string]: string | number | boolean
}

export type Deps = ReadonlyArray<any>
export interface Options extends RequestOptions {
  name?: string
  param?: Param
  deps?: Deps
}

export type Refetch = <T>(options?: Options) => Promise<T>

export interface FetchResult<T> {
  loading: boolean
  data: T
  error: any
}

export interface UpdateResult<T> {
  loading: boolean
  data: T
  error: any
}

export type RequestInterceptor = (config: Options) => any
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
