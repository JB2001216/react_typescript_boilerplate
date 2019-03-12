import { useState, useEffect } from 'react'

import { FetchResult } from './types'
import { request } from './request'

export const useFetch = <T extends {}>(url: string) => {
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)

  const fetchData = async (url: string) => {
    setState(prev => ({ ...prev, loading: true }))

    try {
      const data: T = await request(url)
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
