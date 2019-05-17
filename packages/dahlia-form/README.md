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

const { Field, store } = createForm({
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
  return (
    <form onSubmit={store.handleSubmit}>
      <Field name="email">
        <input type="text" />
      </Field>

      <Field name="password">
        <input type="password" />
      </Field>
      <button type="submit" disabled={store.submitting}>
        submit
      </button>
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
