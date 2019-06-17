import { rmTmpDir } from './rmTmpDir'
import { createDahliaConfig } from './createDahliaConfig'
import { customizeAppInfo } from './customizeAppInfo'
import { createEntryFile } from './createEntryFile'
import { createHtmlFile } from './createHtmlFile'
import { createPublicFiles } from './createPublicFiles'
import { createCommonFiles } from './createCommonFiles'
import { createConfigFile } from './createConfigFile'
import { createRouterConfig } from './createRouterConfig'
import { createModalConfig } from './createModalConfig'
import { createLocaleTypings } from './createLocaleTypings'
import { createLocalesFiles } from './createLocalesFiles'
import { createInterceptorFiles } from './createInterceptorFiles'

export async function prepare() {
  rmTmpDir()
  createDahliaConfig()

  customizeAppInfo()

  // create file
  createEntryFile()
  createPublicFiles()
  createCommonFiles()
  createHtmlFile()
  createConfigFile()
  createRouterConfig()
  createModalConfig()
  createLocalesFiles()
  await createLocaleTypings()
  createInterceptorFiles()
}
