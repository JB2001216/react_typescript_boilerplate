import { useState, useEffect } from 'react'
import { query } from 'gery'

import { dahliaHttpConfig } from './config'
import { Variables, QueryResult } from './types'

export const useQuery = <T extends {}>(gqlStr: string, variables?: Variables) => {
  const initialState = {} as QueryResult<T>
  const [result, setState] = useState(initialState)
  let endpoint = ''
  if (dahliaHttpConfig.graphql) {
    endpoint = dahliaHttpConfig.graphql.endpoint
  }

  const fetchData = async (variables: Variables = {}) => {
    setState(prev => ({ ...prev, loading: true }))

    try {
      const data = await query<T>(endpoint, gqlStr, variables)
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const refetch = (variables?: Variables): any => {
    fetchData(variables)
  }

  useMount(() => {
    fetchData(variables)
  })

  return { ...result, refetch }
}

function useMount(mount: any): void {
  useEffect(mount, [])
}
