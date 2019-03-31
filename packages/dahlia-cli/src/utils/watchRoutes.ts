import { watch } from 'chokidar'
import { routerConfigPath } from './paths'
import { createRoutesFile } from './createRoutesFile'

export const watchRoutes = () => {
  watch(routerConfigPath, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change', 'unlink'].includes(eventType)) {
      createRoutesFile()
    }
  })
}
