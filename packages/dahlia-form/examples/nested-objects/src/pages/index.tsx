import React from 'react'
import { createForm } from 'dahlia-form'

import './index.css'

const userForm = createForm({
  initialValues: {
    user: {
      name: 'Jame',
      email: 'foo@bar.com',
    },
  },
  onSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
})

export default () => {
  const { submitting, ...rest } = userForm.useForm()
  return (
    <form ref={userForm.useRef()}>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
      <input name="user.name" type="text" />
      <input name="user.email" type="email" />
      <button type="submit" disabled={submitting}>
        submit{submitting && '...'}
      </button>
    </form>
  )
}
