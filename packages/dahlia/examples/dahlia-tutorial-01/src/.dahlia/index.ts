
import Dahlia, { Config } from 'dahlia'
import routes from './config/routes'

const { NODE_ENV } = process.env

let config: Config = {
  routes,
  root: '#root',
} as Config

if (NODE_ENV === 'development') {
  const { config: devConfig } = require('./config/config.dev')
  config = {
    ...config,
    ...devConfig,
  }
} else {
  const { config: prodConfig } = require('./config/config.prod')
  config = {
    ...config,
    ...prodConfig,
  }
}

const lang = localStorage.getItem('__lang__') || 'en'

import('../locales/' + lang + '.ts')
  .then(i => {
    ;(window as any).__locale__ = i.default
    Dahlia.bootstrap(config)
  })
  .catch(() => {
    Dahlia.bootstrap(config)
  })

