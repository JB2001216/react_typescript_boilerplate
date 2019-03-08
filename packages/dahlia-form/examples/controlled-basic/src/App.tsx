import React from 'react'
import styled from 'styled-components'

import { createForm } from './src'

export const Form = styled.form`
  width: 600px;
  padding: 100px;
`

const myForm = createForm({
  initialValues: {
    email: 'q@qq.com',
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
      <Form onSubmit={handleSubmit}>
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

        <div>
          <select
            name="selected"
            value={values.selected}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">任意</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <p>Choose gender:</p>

        <span>
          <input
            type="radio"
            id="huey"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="huey">Huey</label>
        </span>

        <span>
          <input
            type="radio"
            id="dewey"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="dewey">Dewey</label>
        </span>

        <p>Choose your gift:</p>

        <span>
          <input
            type="checkbox"
            id="iphone"
            name="gift"
            value="iphone"
            checked={values.gift.includes('iphone')}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="iphone">iPhone</label>
        </span>

        <span>
          <input
            type="checkbox"
            id="ipad"
            name="gift"
            value="ipad"
            checked={values.gift.includes('ipad')}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label htmlFor="ipad">iPad</label>
        </span>

        <div>
          <button type="submit" disabled={submitting}>
            submit
          </button>
        </div>
      </Form>
    </div>
  )
}
