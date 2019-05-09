---
id: plugin
title: 插件
sidebar_label: 使用插件
---

自定义 webpack 配置，最好的是使用 plugin。

## 如何使用？

比如，你需要实现 antd 按需加载，你可以使用以下配置：

```js
import antd from 'dahlia-antd'

export default {
  plugins: [antd()],
}
```

使用多个插件：

```js
import less from 'dahlia-less'
import antd from 'dahlia-antd'
import antdPro from 'dahlia-antd-pro'
import styledJsx from 'dahlia-styled-jsx'

export default {
  plugins: [
    less({
      modifyVars: {
        // 'primary-color': 'red',
        // 'link-color': '#1DA57A',
        // 'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd(),
    antdPro(),
    styledJsx(),
  ],
}
```

## 开发插件

如何开发一个插件呢？插件是一个函数，返回一个包含 webpack 和 devServer 的对象，如下:

```js
export default (options?: any) => {
  const { style = true } = options || {}
  return {
    webpack(config: webpackConfig) {
      // do something with config
      // ...

      return config
    },

    devServer(config: serverConfig) {
      // do something with config
      // ...

      return config
    },
  }
}
```

## 官方插件

- [dahlia-less](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-less)
- [dahlia-styled-components](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-styled-components)
- [dahlia-styled-jsx](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-styled-jsx)
- [dahlia-alias](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-alias)
- [dahlia-antd](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-antd)
- [dahlia-antd-pro](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-antd-pro)
