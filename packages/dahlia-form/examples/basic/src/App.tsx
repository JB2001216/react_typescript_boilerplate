import React from 'react'
import { createForm } from 'fooks'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const basicForm = createForm({
  initialValues: {
    email: 'test@qq.com',
    password: '123456',
  },
  onSubmit: async (values, { setSubmitting }) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  },
})

export default () => {
  const { submitting, ...rest } = basicForm.useForm()

  return (
    <form ref={basicForm.useRef()}>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit" disabled={submitting}>
        submit
      </button>
    </form>
  )
}
