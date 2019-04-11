# dahlia-modal

[![npm](https://img.shields.io/npm/v/dahlia.svg)](https://www.npmjs.com/package/dahlia-modal) [![Build Status](https://travis-ci.org/forsigner/dahlia.svg?branch=master)](https://travis-ci.org/forsigner/dahlia) [](https://coveralls.io/github/forsigner/dahlia?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/dahlia.svg)](https://github.com/forsigner/dahlia/blob/master/LICENSE)

## Installation

```sh
yarn add dahlia-modal
```

## Quick Start

```js
import React from 'react'
import { Modals, ModalConfig, modalStore } from 'dahlia-modal'

const About = () => (
  <span>
    about
    <button onClick={() => modalStore.close('about')}>close</button>
  </span>
)

const config: ModalConfig = [
  {
    name: 'about',
    component: About,
  },
]

export default () => (
  <div>
    <Modals config={config} />
    <span>Hi, Dahlia</span>
    <button onClick={() => modalStore.open('about')}>open</button>
  </div>
)
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
