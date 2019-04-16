# Dahlia request

> An elegant HTTP client based on [Fetch](https://fetch.spec.whatwg.org/)

## Installation

```sh
yarn add dahlia-request
```

## Usage

```js
import { request } from 'dahlia-request'

(async () => {
  const data = await request('https://jsonplaceholder.typicode.com/todos/1')
})()
```

## License

[MIT License](https://github.com/forsigner/dahlia-request/blob/master/LICENSE)
