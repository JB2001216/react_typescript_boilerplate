import fs from 'fs-extra'
import { htmlText } from './config'
import { tmpDir, htmlPath } from './paths'

export const createHtmlFile = () => {
  fs.ensureDirSync(tmpDir)
  fs.writeFileSync(htmlPath, htmlText, { encoding: 'utf8' })
}
