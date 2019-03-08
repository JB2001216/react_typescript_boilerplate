import React from 'react'
import { check } from 'checkok'
import required from 'checkok-required'
import min from 'checkok-min'
import { createForm } from 'fooks'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const basicForm = createForm({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: async (values, { setSubmitting }) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  },
  validate: values => {
    const errors = {} as Partial<typeof values>
    if (!values.email) {
      errors.email = 'require email'
    }

    const password = check(values.password).pipe(
      required('need password'),
      min(6, 'password too short'),
    )

    if (!password.ok) {
      errors.password = password.message
    }

    return errors
  },
})

export default () => {
  const { submitting, touched, errors, ...rest } = basicForm.useForm()

  return (
    <form ref={basicForm.useRef()}>
      <pre>
        {JSON.stringify(
          {
            submitting,
            touched,
            errors,
            ...rest,
          },
          null,
          2,
        )}
      </pre>
      <input name="email" type="text" />
      {touched.email && errors.email && (
        <span className="field-error">{errors.email}</span>
      )}
      <input name="password" type="text" />

      {touched.password && errors.password && (
        <span className="field-error">{errors.password}</span>
      )}
      <br />
      <button type="submit" disabled={submitting}>
        submit
      </button>
    </form>
  )
}
