import { useState, useEffect } from 'react'
import { query } from './query'

import { Variables, QueryResult } from './types'

export const useQuery = <T extends any>(input: string, variables?: Variables) => {
  const initialState = {} as QueryResult<T>
  const [result, setState] = useState(initialState)
  let unmounted = false

  const fetchData = async (variables: Variables = {}) => {
    setState(prev => ({ ...prev, loading: true }))
    try {
      const data = await query<T>(input, variables)
      if (!unmounted) setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      if (!unmounted) setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (variables?: Variables): any => {
    fetchData(variables)
  }

  useEffect(() => {
    fetchData(variables)
    return () => {
      unmounted = true
    }
  }, [])

  return { ...result, refetch }
}
