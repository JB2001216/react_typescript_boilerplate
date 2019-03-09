import { projectDir, reactScriptsPaths, entryPath } from './paths'

export const customizePaths = () => {
  const paths = require('react-scripts/config/paths')
  paths.appSrc = projectDir
  paths.appIndexJs = entryPath
  require(reactScriptsPaths)
  require.cache[require.resolve(reactScriptsPaths)].exports = paths
}
