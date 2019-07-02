# dahlia-popup

## Installation

```bash
yarn add dahlia-popup
```

## Quick Start

```js
import React from 'react'
import { Popups, PopupConfig, popupStore } from 'dahlia-popup'

const About = () => (
  <span>
    about
    <button onClick={() => popupStore.close('about')}>close</button>
  </span>
)

About.drawerProps = {
  title: 'about me',
  width: '80%',
}

const config: PopupConfig = [
  {
    name: 'about',
    component: About,
  },
]

export default () => (
  <div>
    <Popups config={config} />
    <span>Hi, Dahlia</span>
    <button onClick={() => popupStore.open('about')}>open</button>
  </div>
)
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
