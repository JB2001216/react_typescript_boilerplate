---
id: less
title: 使用 Less
sidebar_label: 使用 Less
---

`Dahlia` 并没有默认支持 Less，

**`button.scss`**

```css
.error {
  background-color: red;
}
```

**`Button.js`**

```tsx
import React from 'react'

import './button.scss'

const Button = () => <button>Error Button</button>
```
