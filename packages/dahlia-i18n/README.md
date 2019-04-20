# dahlia-i18n

## Installation

```sh
yarn add dahlia-i18n
```

## Quick Start

### locale file

```bash

locales
├── cn.json
├── default.json
└── en.json
```

```json
// en.json
{
  "name": "dahlia"
}

```

```js


import { i18n } from 'dahlia/i18n'

export default () => (
  <div>{i18n.name}</div>
)

// ...
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
