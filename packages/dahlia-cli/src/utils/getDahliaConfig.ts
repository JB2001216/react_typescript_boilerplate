import fs from 'fs-extra'
import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as ServerConfig } from 'webpack-dev-server'
import { dahliaConfigPath } from './paths'

interface Configuration {
  title?: string
  webpack?: (config: WebpackConfig, env: string) => WebpackConfig
  // TODO: configFunction
  devServer?: (configFunction: any, env?: string) => ServerConfig
}

export function getDahliaConfig(): null | Configuration {
  if (!fs.existsSync(dahliaConfigPath)) return null
  const dahliaConfig = require(dahliaConfigPath)
  if (dahliaConfig.default) {
    return dahliaConfig.default
  }
  return null
}
