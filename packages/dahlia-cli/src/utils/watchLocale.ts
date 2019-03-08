import { watch } from 'chokidar'
import { defaultLocalePath } from './paths'
import { createLocaleTypings } from './createLocaleTypings'
import { createLocalesFiles } from './createLocalesFiles'

export const watchLocale = () => {
  watch(defaultLocalePath, {
    ignoreInitial: true,
  }).on('all', eventType => {
    if (['add', 'change'].includes(eventType)) {
      createLocaleTypings()
    }

    if (['unlink'].includes(eventType)) {
      createLocalesFiles()
    }
  })
}
