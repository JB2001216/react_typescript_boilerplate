import React from 'react'
import { createForm } from 'dahlia/form'

import './home.css'

const basicForm = createForm({
  initialValues: {
    email: 'foo@bar.com',
    password: '',
  },
  onSubmit: async (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  },
})

export const Home = () => {
  const { submitting } = basicForm.useForm()

  return (
    <form ref={basicForm.useRef()}>
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit" disabled={submitting}>
        submit
      </button>
    </form>
  )
}
