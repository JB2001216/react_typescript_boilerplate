import { useState, useEffect } from 'react'
import fetch from 'cross-fetch'

import { dahliaHttpConfig } from './config'
import { FetchResult } from './types'

export const useFetch = <T extends {}>(url: string) => {
  const initialState = { loading: true } as FetchResult<T>
  const [result, setState] = useState(initialState)

  const fetchData = async (url: string) => {
    setState(prev => ({ ...prev, loading: true }))

    let reqURL = url

    if (dahliaHttpConfig.rest) {
      const { endpoint } = dahliaHttpConfig.rest
      const isAbsoluteURL = /http:\/\/|https:\/\//.test(url)
      reqURL = isAbsoluteURL ? url : endpoint + url
    }
    try {
      const res = await fetch(reqURL)
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      const data = await res.json()
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
