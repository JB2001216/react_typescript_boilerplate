import { formatCode } from './formatCode'

const htmlText = formatCode(
  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <title>%TITLE%</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>
`,
  'html',
)

export const entryText = formatCode(`
import Dahlia, { Config } from 'dahlia'
import routes from './config/router.config'
import modals from './config/modal.config'

const { NODE_ENV } = process.env

let config: Config = {
  routes,
  modals,
  root: '#root',
} as Config

if (NODE_ENV === 'development') {
  const devConfig = require('./config/config.dev').default
  config = {
    ...config,
    ...devConfig,
  }
} else {
  const prodConfig = require('./config/config.prod').default
  config = {
    ...config,
    ...prodConfig,
  }
}

Dahlia.bootstrap(config)

// const lang = localStorage.getItem('__lang__') || 'en'
// import('../locales/' + lang + '.ts')
//   .then(i => {
//     ;(window as any).__locale__ = i.default
//     Dahlia.bootstrap(config)
//   })
//   .catch(() => {
//     Dahlia.bootstrap(config)
//   })
`)

export default {
  entry: entryText,
  html: htmlText,
}
