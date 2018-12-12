import { createStore } from 'stamen'
import gql from 'gql-tag'
import { useQuery, useMutate, useFetch, useUpdate } from 'request-hooks'

import { dahlia } from './dahlia'

export default dahlia
export { gql, useQuery, useMutate, useFetch, useUpdate, createStore }
