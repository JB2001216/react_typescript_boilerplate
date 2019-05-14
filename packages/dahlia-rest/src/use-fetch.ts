import { useState, useEffect } from 'react'
import { fetch } from './fetch'
import fetcher from './fetcher'
import { FetchResult, Refetch, Options, HooksResult, Deps, Param } from './types'

function getDeps(options?: Options): Deps {
  if (options && Array.isArray(options.deps)) return options.deps
  return []
}

function getOptions(options?: Options): Options {
  if (!options) return {}
  return options
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

function getFetcherName(options: Options, url: string) {
  return options.name || url
}

export function useFetch<T extends any>(url: string, options?: Options) {
  let reqUrl: string
  let unmounted = false
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)
  const deps = getDeps(options)

  const fetchData = async (opt?: Options) => {
    setState(prev => ({ ...prev, loading: true }))
    const fetchOptions = getOptions(opt)
    if (fetchOptions.param) reqUrl = setUrlParam(url, fetchOptions.param)
    try {
      const data: T = await fetch(reqUrl, fetchOptions || {})
      if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
      return data
    } catch (error) {
      if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
      throw error
    }
  }

  const refetch: Refetch = async <P = any>(opt?: Options): Promise<P> => {
    const refetchedData: any = await fetchData(opt)
    return refetchedData as P
  }

  useEffect(() => {
    const fetchOptions = getOptions(options)
    fetchData(fetchOptions)

    // store refetch fn to fetcher
    const name = getFetcherName(fetchOptions, url)
    fetcher[name] = { refetch }

    return () => {
      unmounted = true
    }
  }, deps)

  return { ...result, refetch } as HooksResult<T>
}
