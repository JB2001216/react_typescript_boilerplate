import fs from 'fs-extra'
import { tmpDahliaConfigPath } from './paths'
import { Configuration } from '../typings/configuration'

export function getDahliaConfig(): null | Configuration {
  if (!fs.existsSync(tmpDahliaConfigPath)) return null
  const dahliaConfig = require(tmpDahliaConfigPath)
  if (dahliaConfig.default) {
    return dahliaConfig.default
  }
  return null
}
