import fs from 'fs-extra'
import { join } from 'path'
import { tmpDir, baseDir, publicDir } from './paths'

export const createPublicFiles = () => {
  fs.ensureDirSync(tmpDir)
  fs.copySync(join(baseDir, 'assets', 'public'), publicDir)
}
