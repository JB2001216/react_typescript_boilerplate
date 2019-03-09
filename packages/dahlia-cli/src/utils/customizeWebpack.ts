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
    if (fs.existsSync(dahliaConfigPath)) {
      const dahliaConfig = require(dahliaConfigPath)
      if (dahliaConfig.webpack) {
        return dahliaConfig.webpack(newConfig, env)
      }
      return newConfig
    }
    return newConfig
  }
}
