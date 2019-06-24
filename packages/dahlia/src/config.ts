import { ComponentType } from 'react'
import { Routes } from 'dahlia-router'
import { ModalConfig } from 'dahlia-modal'
import { DrawerConfig } from 'dahlia-drawer'
import { RestConfig } from 'dahlia-rest'
import { GraphqlConfig } from 'dahlia-graphql'

export interface Config {
  routes: Routes
  modals: ModalConfig
  drawers: DrawerConfig
  graphql?: GraphqlConfig
  rest?: RestConfig
  root: string
  app?: ComponentType<any>
}

export const config: Config = {} as Config
