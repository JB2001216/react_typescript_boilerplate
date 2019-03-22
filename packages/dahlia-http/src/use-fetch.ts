import { useState, useEffect } from 'react'
import { FetchResult } from './types'
import { request } from './request'
import { Options } from './types'

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
  const options = getOptions(optionsOrDeps)

  const fetchData = async (url: string) => {
    try {
      const data: T = await request(url, options)
      !unmounted && setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      !unmounted && setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (url: string): any => {
    setState(prev => ({ ...prev, loading: true }))
    fetchData(url)
  }

  useEffect(() => {
    fetchData(url)
    return () => {
      unmounted = true
    }
  }, dependences)

  return { ...result, refetch } as HooksResult<T>
}
