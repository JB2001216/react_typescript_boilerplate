# dahlia-observable

[![npm](https://img.shields.io/npm/v/dahlia.svg)](https://www.npmjs.com/package/dahlia-observable) [![Build Status](https://travis-ci.org/forsigner/dahlia.svg?branch=master)](https://travis-ci.org/forsigner/dahlia) [](https://coveralls.io/github/forsigner/dahlia?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/dahlia.svg)](https://github.com/forsigner/dahlia/blob/master/LICENSE)


## Installation

```sh
yarn add dahlia-observable
```

## Quick Start

```js
import { observable } from '@nx-js/observer-util';

const counter = observable({ num: 0 });

observe(() => console.log(counter.num));

counter.num++ // log 1

counter.num++ // log2

```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
