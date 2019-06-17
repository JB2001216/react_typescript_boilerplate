import fs from 'fs-extra'
import texts from './texts'
import { tmpDir, htmlPath } from './paths'

export const createHtmlFile = () => {
  fs.ensureDirSync(tmpDir)
  fs.writeFileSync(htmlPath, texts.html, { encoding: 'utf8' })
}
