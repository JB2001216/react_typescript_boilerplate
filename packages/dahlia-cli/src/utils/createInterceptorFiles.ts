import fs from 'fs-extra'
import { interceptorsDir, tmpInterceptorsDir } from './paths'
// import { formatCode } from './formatCode'

// function writeDefaultFile() {
//   fs.writeFileSync(defaultLocalePath, formatCode(localeText), {
//     encoding: 'utf8',
//   })
// }

function createTmpInterceportsDir() {
  fs.ensureDirSync(tmpInterceptorsDir)
}

export function createInterceptorFiles() {
  createTmpInterceportsDir()
  if (fs.existsSync(interceptorsDir)) {
    fs.copySync(interceptorsDir, tmpInterceptorsDir)
  }
  // writeDefaultFile()
}
