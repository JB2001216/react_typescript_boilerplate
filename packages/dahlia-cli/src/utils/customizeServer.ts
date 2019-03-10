import fs from 'fs-extra'
import { join } from 'path'
import { Configuration } from 'webpack-dev-server'
import { devServerConfigPath, projectDir } from './paths'
import { getDahliaConfig } from './getDahliaConfig'

export const customizeServer = () => {
  const devServerConfig = require(devServerConfigPath)

  let devServer = (configFunction: any, env?: string) => (
    proxy: any,
    allowedHost: any,
  ) => {
    const config: Configuration = configFunction(proxy, allowedHost, env)
    // TODO
    config.contentBase = [
      join(projectDir, '.dahlia', 'public'),
      join(projectDir, 'public'),
    ]
    return config
  }

  const dahliaConfig = getDahliaConfig()

  if (dahliaConfig && dahliaConfig.devServer) {
    // TODO: handle any
    devServer = dahliaConfig.devServer as any
  }

  require.cache[require.resolve(devServerConfigPath)].exports = devServer(
    devServerConfig,
    process.env.NODE_ENV,
  )
}
