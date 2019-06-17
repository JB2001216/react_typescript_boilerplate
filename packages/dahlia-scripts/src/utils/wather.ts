import { watchConfig } from './watchConfig'
import { watchRouterConfig } from './watchRouterConfig'
import { watchModalConfig } from './watchModalConfig'
import { watchPages } from './watchPages'
import { watchModals } from './watchModals'
import { watchLocale } from './watchLocale'
import { watchCommon } from './watchCommon'

export function watcher() {
  // watch files
  watchConfig()
  watchRouterConfig()
  watchPages()
  watchModalConfig()
  watchModals()
  watchLocale()
  watchCommon()
}
