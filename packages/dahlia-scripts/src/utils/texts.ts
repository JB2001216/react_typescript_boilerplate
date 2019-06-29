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
import { ResponseInterceptor, RequestInterceptor } from 'dahlia/rest'
import { modalStore } from 'dahlia/modal'

import configDefault from './config/config.default'
import configLocal from './config/config.local'
import configProd from './config/config.prod'
import routes from './config/router.config'
import modals from './config/modal.config'
import drawers from './config/drawer.config'
import response from './interceptors/response'
import request from './interceptors/request'
import App from './common/App'
import Modal from './common/Modal'

const responseInterceptors: ResponseInterceptor[] = Array.isArray(response)
  ? response
  : [response]

const requestInterceptors: RequestInterceptor[] = Array.isArray(request)
  ? request
  : [request]

const { NODE_ENV } = process.env

const config = {
  routes,
  modals,
  drawers,
  graphql: {
    endpoint: '/graphql',
  },
  rest: {
    endpoint: location.protocol + '//' + location.host,
  },
  root: '#root',
  app: App,
} as Config

// customize modal
modalStore.setModalContainer(Modal)

const isProd = NODE_ENV === 'production'

const userConfig = isProd
  ? { ...configDefault, ...configProd }
  : { ...configDefault, ...configLocal }

const finalConfig = {
  ...config,
  ...userConfig,
} as Config

finalConfig.rest.interceptor = {} as any
finalConfig.rest.interceptor.responses = responseInterceptors
finalConfig.rest.interceptor.requests = requestInterceptors

const lang = localStorage.getItem('__lang__') || 'default'

import('./locales/' + lang + '.json')
  .then(i => {
    ;(window as any).__locale__ = i.default
    Dahlia.bootstrap(finalConfig)
  })
  .catch(() => {
    Dahlia.bootstrap(finalConfig)
  })

`)

const interceptor = formatCode(`
export default (data: any) => {
  return data
}
`)

const config = formatCode(`
const config = {
}
export default config
`)

export default {
  entry: entryText,
  html: htmlText,
  interceptor,
  config,
}
