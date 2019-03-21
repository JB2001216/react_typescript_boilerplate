import { useState, useEffect } from 'react'
import { query } from 'gery'

import { dahliaHttpConfig } from './config'
import { Variables, QueryResult } from './types'

export const useQuery = <T extends any>(gqlStr: string, variables?: Variables) => {
  const initialState = {} as QueryResult<T>
  const [result, setState] = useState(initialState)
  let unmounted = false
  let endpoint = ''
  if (dahliaHttpConfig.graphql) {
    endpoint = dahliaHttpConfig.graphql.endpoint
  }

  const fetchData = async (variables: Variables = {}) => {
    try {
      const data = await query<T>(endpoint, gqlStr, variables)
      !unmounted && setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      !unmounted && setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (variables?: Variables): any => {
    setState(prev => ({ ...prev, loading: true }))
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
