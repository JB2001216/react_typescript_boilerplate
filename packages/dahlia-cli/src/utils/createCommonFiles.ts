import fs from 'fs-extra'
import { join } from 'path'
import { baseDir, commonPaths, tmpCommonDir } from './paths'

function writeDefaultFile(name: string) {
  fs.copySync(join(baseDir, 'assets', 'common', name), tmpCommonDir)
}

function createTmpCommonDir() {
  fs.ensureDirSync(tmpCommonDir)
}

export function createCommonFiles() {
  createTmpCommonDir()
  commonPaths.forEach(({ origin, target, name }) => {
    if (fs.existsSync(origin)) {
      fs.copyFileSync(origin, target)
    } else {
      writeDefaultFile(name)
    }
  })
}
