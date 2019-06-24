# dahlia-drawer

## Installation

```bash
yarn add dahlia-drawer
```

## Quick Start

```js
import React from 'react'
import { Drawers, DrawerConfig, drawerStore } from 'dahlia-drawer'

const About = () => (
  <span>
    about
    <button onClick={() => drawerStore.close('about')}>close</button>
  </span>
)

About.drawerProps = {
  title: 'about me',
  width: '80%',
}

const config: DrawerConfig = [
  {
    name: 'about',
    component: About,
  },
]

export default () => (
  <div>
    <Drawers config={config} />
    <span>Hi, Dahlia</span>
    <button onClick={() => drawerStore.open('about')}>open</button>
  </div>
)
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
