import fs from 'fs-extra'
import { localesDir, defaultLocalePath } from './paths'
import { formatCode } from './formatCode'

const localeObj = {
  appName: '一个牛逼的平台',
  nav: {
    home: '首页',
    contact: '联系',
    about: '关于',
  },
}

const localeText = `export default ${JSON.stringify(localeObj, null, 2)}`

function writeDefaultFile() {
  fs.writeFileSync(defaultLocalePath, formatCode(localeText), { encoding: 'utf8' })
}

function createLocalesDir() {
  fs.ensureDirSync(localesDir)
}

export function createLocalesFiles() {
  createLocalesDir()
  if (fs.existsSync(defaultLocalePath)) {
    return
  }
  writeDefaultFile()
}
