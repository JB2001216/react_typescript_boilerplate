import { createStore } from 'stamen'
import gql from 'gql-tag'
import { useQuery, useMutate, useFetch, useUpdate } from 'request-hooks'

import { Dahlia } from './dahlia'

export default Dahlia
export { gql, useQuery, useMutate, useFetch, useUpdate, createStore }
