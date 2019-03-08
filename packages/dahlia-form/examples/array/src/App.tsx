import React from 'react'
import { createForm } from 'fooks'

const { useRef, useForm } = createForm({
  initialValues: {
    players: ['CR7', 'Messi'],
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
  const { submitting } = useForm()
  return (
    <form ref={useRef()}>
      <input name="players[0]" type="text" />
      <input name="players[1]" type="text" />
      <button type="submit" disabled={submitting}>
        submit{submitting && '...'}
      </button>
    </form>
  )
}
