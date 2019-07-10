import { join } from 'path'
import { srcDir, reactScriptsPaths, entryPath, publicDir } from './paths'
import { getDahliaConfig } from './getDahliaConfig'

export const customizePaths = () => {
  const paths = require(reactScriptsPaths)

  paths.appSrc = srcDir
  paths.appIndexJs = entryPath
  paths.appHtml = join(srcDir, '.dahlia', 'index.html')
  paths.appPublic = publicDir
  paths.appPublic = publicDir

  // customize build dir
  const dahliaConfig = getDahliaConfig()
  if (dahliaConfig && dahliaConfig.buildDir) {
    paths.appBuild = dahliaConfig.buildDir
  }

  require(reactScriptsPaths)
  require.cache[require.resolve(reactScriptsPaths)].exports = paths
}
