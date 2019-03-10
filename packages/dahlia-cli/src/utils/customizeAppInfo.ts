import fs from 'fs-extra'
import { dahliaConfigPath } from './paths'
import texts from './texts'

export const customizeAppInfo = () => {
  if (fs.existsSync(dahliaConfigPath)) {
    const dahliaConfig = require(dahliaConfigPath)
    // TODO: need check config file
    if (!dahliaConfig.default) {
      return;
    }
    const config = dahliaConfig.default
    if (config.title) {
      texts.html = texts.html.replace('%TITLE%', config.title)
    }
  }
}
