import React from 'react'
import { createForm } from 'dahlia-form'

import './index.css'


const myForm = createForm({
  initialValues: {
    // email: 'q@qq.com',
    email: '',
    password: 10,
    desc: 'intro..',
    selected: 'audi',
    gender: 'male',
    gift: ['ipad'],
  },
  onSubmit: values => {
    console.log('values:', values)
    alert(JSON.stringify(values, null, 2))
  },
})

export default () => {
  const { useForm, Field } = myForm

  const {
    errors,
    touched,
    values,
    submitCount,
    submitting,
    valid,
    dirty,
    validating,
    handleSubmit,
  } = useForm()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <pre>
          {JSON.stringify(
            {
              errors,
              touched,
              values,
              submitCount,
              dirty,
              submitting,
              valid,
              validating,
            },
            null,
            2,
          )}
        </pre>
        <Field name="email" placeholder="Email" />

        <Field name="password">
          {field => <input {...field} type="password" />}
        </Field>

        <Field name="desc" component="textarea" placeholder="intro..." />

        <Field name="selected" component="select">
          <option value="">任意</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Field>

        <p>Choose gender:</p>

        <Field name="gender" id="male" value="male" type="radio" />
        <label htmlFor="male">male</label>

        <Field name="gender" id="femal" value="female" type="radio" />
        <label htmlFor="femal">Female</label>

        <p>Choose your gift:</p>

        <Field name="gift" id="iphone" value="iphone" type="checkbox" />
        <label htmlFor="iphone">iPhone</label>

        <Field name="gift" id="ipad" value="ipad" type="checkbox" />
        <label htmlFor="ipad">iPad</label>

        <div>
          <button type="submit" disabled={submitting}>
            submit
          </button>
        </div>
      </form>
    </div>
  )
}
