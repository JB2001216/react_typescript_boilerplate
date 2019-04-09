import fs from 'fs-extra'
import spawn from 'cross-spawn'
import { tscScript, dahliaConfigPath, tmpDir } from './paths'

export const createDahliaConfig = () => {
  if (!fs.existsSync(dahliaConfigPath)) return

  const args = [
    dahliaConfigPath,
    '--target',
    'es5',
    '--lib',
    'es7,esnext.asynciterable',
    '--moduleResolution',
    'node',
    '--skipLibCheck',
    '--esModuleInterop',
    '--outDir',
    tmpDir,
  ]
  spawn.sync(tscScript, args, {
    stdio: 'inherit',
  })
}
