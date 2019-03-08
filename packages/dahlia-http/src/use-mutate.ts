import { useState } from 'react'
import { query } from 'gery'

import { dahliaHttpConfig } from './config'
import { Variables, Mutate, MutateResult } from './types'

export const useMutate = <T extends {}>(gqlStr: string) => {
  const initialState = {} as MutateResult<T>
  const [result, setState] = useState(initialState)
  const { endpoint } = dahliaHttpConfig.graphql

  const fetchData = async (variables: Variables = {}) => {
    try {
      const data = await query<T>(endpoint, gqlStr, variables)
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const mutate = (variables: Variables): any => {
    setState(prev => ({ ...prev, loading: true }))
    fetchData(variables)
  }

  const out: [Mutate, MutateResult<T>] = [mutate, result]

  return out
}
