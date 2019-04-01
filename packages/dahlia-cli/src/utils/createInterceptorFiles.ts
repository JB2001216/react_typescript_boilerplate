import fs from 'fs-extra'
import { interceptorPaths, interceptorsDir, tmpInterceptorsDir } from './paths'
import texts from './texts'
import { formatCode } from './formatCode'

function writeDefaultFile(target: string) {
  fs.writeFileSync(target, formatCode(texts.interceptorText), {
    encoding: 'utf8',
  })
}

function createTmpInterceportsDir() {
  fs.ensureDirSync(tmpInterceptorsDir)
}

export function createInterceptorFiles() {
  createTmpInterceportsDir()
  interceptorPaths.forEach(({ origin, target }) => {
    if (fs.existsSync(origin)) {
      fs.copyFileSync(origin, target)
    } else {
      writeDefaultFile(target)
    }
  })
}
