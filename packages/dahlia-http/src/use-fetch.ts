import { useState, useEffect } from 'react'

import { FetchResult } from './types'
import { request } from './request'
import { Options } from './types'

export const useFetch = <T extends any>(url: string, options?: Options) => {
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)
  let unmounted = false

  const fetchData = async (url: string) => {
    const args: [string, Options?] = !options ? [url] : [url, options]
    try {
      const data: T = await request(...args)
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
  }, [])

  return { ...result, refetch }
}
