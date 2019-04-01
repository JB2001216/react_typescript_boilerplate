import { Routes } from 'dahlia-router'
import { ModalConfig } from 'dahlia-modal'
import { Interceptor } from 'dahlia-http'

export interface Config {
  routes: Routes
  modals: ModalConfig
  graphql?: {
    endpoint: string
  }
  rest?: {
    endpoint: string
    interceptor?: Interceptor
  }
  root: string
}

export const config: Config = {} as Config
