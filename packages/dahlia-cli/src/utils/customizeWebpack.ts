import fs from 'fs-extra'
import override from 'dahlia-webpack-override'
import styledJsx from 'dahlia-webpack-styled-jsx'
import styleComponents from 'dahlia-webpack-styled-components'
import { Configuration } from 'webpack'

import { dahliaConfigPath, webpackConfigPath } from './paths'
import { overrideWebpackExclude } from './overrideWebpackExclude'

export const customizeWebpack = () => {
  const webpackConfig = require(webpackConfigPath)
  require.cache[require.resolve(webpackConfigPath)].exports = (env: string) => {
    const config: Configuration = webpackConfig(env)

    const newConfig = override(config, env).pipe(
      styleComponents(),
      styledJsx(),
      overrideWebpackExclude(),
    )
    // TODO: node
    if (fs.existsSync(dahliaConfigPath)) {
      const dahliaConfig = require(dahliaConfigPath)
      if (dahliaConfig.default && dahliaConfig.default.webpack) {
        return dahliaConfig.default.webpack(newConfig, env)
      }
      return newConfig
    }
    return newConfig
  }
}
