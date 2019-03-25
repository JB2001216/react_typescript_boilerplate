import React from 'react'
import { createForm } from 'dahlia-form'

import { string, number } from './src/check'

import './index.css'




const myForm = createForm({
  initialValues: {
    email: 'q@qq.com',
    password: 10,
    desc: 'intro..',
    hello: {
      bo: '',
    },
    selected: 'audi',
    drone: 'dewey',
    checks: ['horns'],
  },
  onSubmit: values => {
    console.log('values:', values)
    alert(JSON.stringify(values, null, 2))
  },
  validate: values => {
    // console.log('values:', values)
    const errors: any = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    } else {
      errors.email = ''
    }

    return errors
  },

  // validator: {
  //   email: values =>
  //     string(values.email)
  //       .required('email required')
  //       .email('email format'),
  //   password: values =>
  //     number(values.password)
  //       .required('pass Required')
  //       .integer('should integer')
  //       .min(6, 'pass Too Short!')
  //       .max(50, 'pass Too Long!'),
  // },
})

export default () => {
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
    handleChange,
    handleBlur,
  } = myForm.useForm()
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
        <input
          name="email"
          type="text"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors.email && touched.email && (
          <div className="field-error">{errors.email}</div>
        )}
        <input
          name="password"
          type="number"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors.password && touched.password && (
          <div className="field-error">{errors.password}</div>
        )}
        <textarea
          name="desc"
          value={values.desc}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <select name="selected">
          <option value="">任意</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <span>
          <input type="radio" id="huey" name="drone" value="huey" />
          <label htmlFor="huey">Huey</label>
        </span>

        <span>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">Dewey</label>
        </span>

        <span>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label htmlFor="louie">Louie</label>
        </span>

        <p>Choose your monster's features:</p>

        <span>
          <input type="checkbox" id="scales" name="checks" value="scales" />
          <label htmlFor="scales">Scales</label>
        </span>

        <span>
          <input type="checkbox" id="horns" name="checks" value="horns" />
          <label htmlFor="horns">Horns</label>
        </span>

        <button type="submit" disabled={submitting}>
          submit
        </button>
      </form>
    </div>
  )
}