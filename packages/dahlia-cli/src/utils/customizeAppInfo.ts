import fs from 'fs-extra'
import { dahliaConfigPath } from './paths'
import texts from './texts'
import { getDahliaConfig } from './getDahliaConfig'

export const customizeAppInfo = () => {
  if (fs.existsSync(dahliaConfigPath)) {
    const dahliaConfig = getDahliaConfig()

    if (!dahliaConfig) return
    if (dahliaConfig.title) {
      texts.html = texts.html.replace('%TITLE%', dahliaConfig.title)
    }
  }
}
