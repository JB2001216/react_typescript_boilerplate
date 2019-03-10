import { join } from 'path'
import { projectDir, reactScriptsPaths, entryPath, publicDir } from './paths'

export const customizePaths = () => {
  const paths = require(reactScriptsPaths)
  paths.appSrc = projectDir
  paths.appIndexJs = entryPath
  paths.appHtml = join(projectDir, '.dahlia', 'index.html')
  paths.appPublic = publicDir

  require(reactScriptsPaths)
  require.cache[require.resolve(reactScriptsPaths)].exports = paths

}
