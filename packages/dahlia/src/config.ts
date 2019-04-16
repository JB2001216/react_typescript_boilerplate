import { ComponentType } from 'react'
import { Routes } from 'dahlia-router'
import { ModalConfig } from 'dahlia-modal'

export interface Config {
  routes: Routes
  modals: ModalConfig
  graphql?: any // TODO:
  rest?: any // TODO:
  root: string
  app?: ComponentType<any>
}

export const config: Config = {} as Config
