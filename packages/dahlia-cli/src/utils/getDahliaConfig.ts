import fs from 'fs-extra'
import { dahliaConfigPath } from './paths'
import { Configuration } from '../typings/configuration'

export function getDahliaConfig(): null | Configuration {
  if (!fs.existsSync(dahliaConfigPath)) return null
  const dahliaConfig = require(dahliaConfigPath)
  if (dahliaConfig.default) {
    return dahliaConfig.default
  }
  return null
}
