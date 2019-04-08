# 使用 Less

`Dahlia` 并没有默认支持 Less，

**`button.scss`**

```css
.error {
  background-color: red;
}
```

**`Button.js`**

```js
import React from 'react'

import './button.scss'

const Button = () => <button>Error Button</button>
```
