import Dahlia from 'dahlia'

const { NODE_ENV } = process.env

if (NODE_ENV === 'development') {
  // tslint:disable-next-line
  const { config } = require('../config/config.dev')
  Dahlia.bootstrap(config)
} else {
  // tslint:disable-next-line
  const { config } = require('../config/config.prod')
  Dahlia.bootstrap(config)
}
