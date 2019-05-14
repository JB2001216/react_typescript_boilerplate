type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD'

interface BodyObject {
  [key: string]: any
}

export interface Query {
  [key: string]: any
}

export type Body =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | string
  | BodyObject
  | any[]
  | null

export interface Param {
  [key: string]: string | number | boolean
}

export interface Options {
  query?: Query
  body?: Body
  param?: Param
  cache?: RequestCache
  credentials?: RequestCredentials
  headers?: HeadersInit
  integrity?: string
  keepalive?: boolean
  method?: Method
  mode?: RequestMode
  redirect?: RequestRedirect
  referrer?: string
  referrerPolicy?: ReferrerPolicy
  signal?: AbortSignal | null
  window?: any
}
