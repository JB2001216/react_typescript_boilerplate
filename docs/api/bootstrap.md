# bootstrap

用来初始化 Dahlia，推荐在入口文件初始化，这里为什么不使用 Provider 的方式来初始化，因为初始化的配置跟子组件并没有关系，所以没必要，使用 "**Programmatically**" 的方式初始化会更清晰。

```javascript
// index.ts
import Dahlia from 'dahlia'
import { routes } from './routes'

Dahlia.bootstrap({
  routes,
  selector: '#root',
})
```

```javascript
// routes.ts

import { Routes } from 'Dahlia'
import { Home } from './pages/Home'

export const routes: Routes = [
  {
    path: '/',
    component: Home,
  },
]
```

