import { useState, useEffect } from 'react'

import { FetchResult } from './types'
import { request } from './request'
import { Options } from './types'

export const useFetch = <T extends any>(url: string, options?: Options) => {
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)

  const fetchData = async (url: string) => {
    setState(prev => ({ ...prev, loading: true }))

    const args: [string, Options?] = !options ? [url] : [url, options]
    try {
      const data: T = await request(...args)
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (url: string): any => {
    fetchData(url)
  }

  useMount(() => {
    fetchData(url)
  })

  return { ...result, refetch }
}

function useMount(mount: any): void {
  useEffect(mount, [])
}
