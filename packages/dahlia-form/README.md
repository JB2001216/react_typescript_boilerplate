# dahlia-form

> React form based on Hooks

## Installation

```sh
yarn add dahlia-form
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createForm } from 'dahlia-form'


const loginForm = createForm({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: async (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  },
})

const App = () => {
  const { submitting } = loginForm.useForm()
  return (
    <form ref={loginForm.useRef()}>
      <input name="email" type="text" />
      <input name="password" type="password" />
      <button type="submit" disabled={submitting}>
        submit
      </button>
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
