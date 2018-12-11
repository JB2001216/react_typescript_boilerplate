import { createStore } from 'stamen'
import { query } from 'gery'
import gql from 'gql-tag'
import { useQuery, usePull } from 'request-hooks'

import { dahlia } from './dahlia'

export default dahlia
export { gql, query, useQuery, usePull, createStore }
