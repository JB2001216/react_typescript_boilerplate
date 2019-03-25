import React from 'react'
import { createForm } from 'dahlia-form'

import './index.css'

const loginForm = createForm({
  initialValues: {
    email: 'foo@bar.com',
    password: '',
  },
  onSubmit: (values, { setSubmitting }) => {
    console.log('values:', values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
})

export default () => {
  const emailFromDynamic = 'dynamic@t.com'
  const { submitting } = loginForm.useForm({ email: emailFromDynamic })
  return (
    <form ref={loginForm.useRef()}>
      <input name="email" type="text" />
      <input name="password" type="password" />
      <button type="submit" disabled={submitting}>
        submit{submitting && '...'}
      </button>
    </form>
  )
}
