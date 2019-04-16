import { useState, useEffect } from 'react'
import { Options } from 'dahlia-request'
import { fetch } from './fetch'
import { FetchResult } from './types'

interface HooksResult<T> extends FetchResult<T> {
  refetch: (url: any) => any
}

type Deps = ReadonlyArray<any>

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
  return optionsOrDeps as Options
}

export function useFetch<T extends any>(url: string, options?: Options, deps?: Deps): HooksResult<T>
export function useFetch<T extends any>(url: string, options?: Options): HooksResult<T>
export function useFetch<T extends any>(url: string, deps?: Deps): HooksResult<T>

export function useFetch<T extends any>(url: string, optionsOrDeps?: Deps | Options, deps?: Deps) {
  let unmounted = false
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)
  const dependences = getDeps(optionsOrDeps, deps)

  const fetchData = async (url: string, options?: Options) => {
    setState(prev => ({ ...prev, loading: true }))
    try {
      const data: T = await fetch(url, options)
      if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (url: string, options?: Options): any => {
    fetchData(url, options || {})
  }

  useEffect(() => {
    const options = getOptions(optionsOrDeps)
    fetchData(url, options)
    return () => {
      unmounted = true
    }
  }, dependences)

  return { ...result, refetch } as HooksResult<T>
}
