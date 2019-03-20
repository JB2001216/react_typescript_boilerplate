import { useState } from 'react'

import { Update, UpdateResult } from './types'
import { request } from './request'
import { Options } from './types'

export const useUpdate = <T extends any>(url: string, options?: Options) => {
  const initialState = {} as UpdateResult<T>
  const [result, setState] = useState(initialState)

  const updateData = async () => {
    try {
      const args: [string, Options?] = !options ? [url] : [url, options]
      const data: T = await request(...args)
      setState(prev => ({ ...prev, loading: false, data }))
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }))
    }
  }

  const update = (): any => {
    setState(prev => ({ ...prev, loading: true }))
    updateData()
  }

  const out: [Update, UpdateResult<T>] = [update, result]

  return out
}
