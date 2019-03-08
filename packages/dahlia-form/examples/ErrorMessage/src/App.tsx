import React from 'react'
import { check } from 'checkok'
import required from 'checkok-required'
import min from 'checkok-min'
import { createForm } from 'fooks'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const basicForm = createForm({
  initialValues: {
    // email: 'test@qq.com',
    email: '',
    password: '',
  },
  onSubmit: async (values, { setSubmitting }) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  },
  validator: {
    email: [required('require email'), min(6, 'email too short')],
    password: values =>
      check(values.password).pipe(
        required('need password'),
        min(6, 'password too short'),
      ),
  },
})

export default () => {
  const { ErrorMessage, useRef, useForm } = basicForm
  const { submitting, ...rest } = useForm()

  return (
    <form ref={useRef()}>
      <pre>
        {JSON.stringify(
          {
            submitting,
            ...rest,
          },
          null,
          2,
        )}
      </pre>
      <input name="email" type="text" />
      <ErrorMessage name="email" className="field-error" />
      <input name="password" type="text" />
      <ErrorMessage name="password">
        {error => <div className="field-error">{error}</div>}
      </ErrorMessage>
      <button type="submit" disabled={submitting}>
        submit
      </button>
    </form>
  )
}
