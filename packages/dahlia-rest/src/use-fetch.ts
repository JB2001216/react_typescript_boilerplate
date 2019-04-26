import { useState, useEffect } from 'react'
import { fetch } from './fetch'
import fetcher from './fetcher'
import { FetchResult, Refetch, Options, HooksResult, Deps, Param } from './types'

function getDeps(optionsOrDeps?: Deps | Options, deps?: Deps): Deps {
  if (deps) return deps
  if (!optionsOrDeps) return [] as Deps
  if (Array.isArray(optionsOrDeps)) {
    return optionsOrDeps
  }
  return [] as Deps
}

function getOptions(optionsOrDeps?: Deps | Options): Options {
  if (!optionsOrDeps) return {} as Options
  if (Array.isArray(optionsOrDeps)) return {}
  return optionsOrDeps as Options
}

function setUrlParam(url: string = '', param: Param) {
  return url
    .split('/')
    .map(item => {
      if (item.startsWith(':')) {
        return param[item.replace(/^\:/, '')]
      }
      return item
    })
    .join('/')
}

export function useFetch<T extends any>(url: string, options?: Options, deps?: Deps): HooksResult<T>
export function useFetch<T extends any>(url: string, options?: Options): HooksResult<T>
export function useFetch<T extends any>(url: string, deps?: Deps): HooksResult<T>

export function useFetch<T extends any>(url: string, optionsOrDeps?: Deps | Options, deps?: Deps) {
  const originUrl = url
  let unmounted = false
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)
  const dependences = getDeps(optionsOrDeps, deps)

  const fetchData = async (options?: Options) => {
    setState(prev => ({ ...prev, loading: true }))
    const fetchOptions = getOptions(options)
    if (fetchOptions.param) url = setUrlParam(originUrl, fetchOptions.param)
    try {
      const data: T = await fetch(url, fetchOptions || {})
      if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
      return data
    } catch (error) {
      if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
      throw error
    }
  }

  const refetch: Refetch = async <P = any>(options?: Options): Promise<P> => {
    const refetchedData: any = await fetchData(options)
    return refetchedData as P
  }

  useEffect(() => {
    const options = getOptions(optionsOrDeps)
    fetchData(options)

    // store refetch fn to fetcher
    if (options.name) {
      fetcher[options.name] = { refetch }
    }

    return () => {
      unmounted = true
    }
  }, dependences)

  return { ...result, refetch } as HooksResult<T>
}
