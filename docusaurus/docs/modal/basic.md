# 约定式弹窗

Dahlia 使用类似约定式路由的约定式弹窗：

```bash
.
├── package.json
├── modals
│   ├── ModalUser.tsx 
│   └── ModalLogin.tsx
└── tsconfig.json
```

举个例子，下面文件会直接到 url 的 path: `/about`。

```js
import React from 'react'

const About = () => (
  <div>
    <h1>Page About</h1>
    <p>About me</p>
  </div>
)

export default About
```
