import React, {
  Fragment,
  FormEvent,
  ChangeEvent,
  FocusEvent,
  useState,
  useEffect,
  createElement,
} from 'react'
import set from 'lodash.set'
import get from 'lodash.get'
import equal from 'fast-deep-equal'
import merge from 'deepmerge'
import produce from 'immer'
import { check } from 'checkok'
import isArray from 'util-is-array'

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

type Errors<Values> = {
  [K in keyof Values]?: Values[K] extends object ? Errors<Values[K]> : string
}

type Touched<Values> = {
  [K in keyof Values]?: Values[K] extends object ? Touched<Values[K]> : boolean
}

type Validate<Values> = (values: Values) => any
type ValidatorFn<Values> = (values: Values) => any
type Validator<Values> =
  | { [P in keyof Values]?: ValidatorFn<Values> | any[] }
  | {
      [key: string]: ValidatorFn<Values> | any[]
    }

interface State<Values> {
  values: Values
  errors: Errors<Values>
  touched: Touched<Values>
  submitting: boolean
  validating: boolean
  dirty: boolean
  valid: boolean
  validateOnChange: boolean
  validateOnBlur: boolean
  submitCount: number
  handleSubmit: (e: FormEvent<HTMLFormElement>) => any
  handleChange: (e: ChangeEvent<FieldElement>) => any
  handleBlur: (e: FocusEvent<FieldElement>) => any
}

interface FieldParams {
  name: string
  value: any
  onBlur: any
  onChange: any
}

type Input =
  | 'text'
  | 'email'
  | 'url'
  | 'number'
  | 'color'
  | 'date'
  | 'range'
  | 'search'
  | 'radio'
  | 'checkbox'

interface FieldProps<Values> {
  name: keyof Values & string
  type?: Input
  id?: string
  placeholder?: string
  className?: string
  component?: string | React.ComponentType
  children?: ((field: FieldParams) => React.ReactNode) | React.ReactNode
  [key: string]: any
}

interface ErrorMessageProps<Values> {
  name: keyof Values & string
  className?: string
  component?: string | React.ComponentType
  children?: ((error: string) => React.ReactNode)
  [key: string]: any
}

export interface Options<Values> {
  initialValues?: Values
  onSubmit: (
    values: Values,
    options: { setSubmitting: (submitting: boolean) => any },
  ) => any
  validate?: Validate<Values>
  validator?: Validator<Values>
}

function val(node: FieldElement) {
  let parsed
  const { type, value } = node
  if (/number|range/.test(type)) {
    return (parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed
  }
  if (/checkbox/.test(type) && 'checked' in node) {
    return node.checked
  }

  return value
}

// TODO: refactor
function checkValid(errors: any = {}): boolean {
  let errorString = ''
  function getErrrorString(errors: any = {}) {
    Object.keys(errors).forEach(key => {
      if (typeof errors[key] === 'object') {
        getErrrorString(errors[key])
      } else {
        errorString += errors[key]
      }
    })
  }
  getErrrorString(errors)
  return !errorString.length
}

function getNodes($form: HTMLFormElement) {
  const $inputs = $form.querySelectorAll('input')
  const $selets = $form.querySelectorAll('select')
  const $textareas = $form.querySelectorAll('textarea')
  const nodes = [
    ...Array.from($inputs),
    ...Array.from($textareas),
    ...Array.from($selets),
  ]
  return nodes
}

function checkValidateOptions<Values>(
  validate: Validate<Values> | undefined,
  validator: Validator<Values> | undefined,
) {
  if (validate && validator) {
    throw new Error('Can only configure one between "validate" or "validator"')
  }
}

export const createForm = <Values extends any>(options: Options<Values>) => {
  const {
    initialValues = {} as Values,
    onSubmit,
    validate,
    validator,
  } = options
  let state = { values: initialValues } as State<Values>
  let ref: any = null
  let nodes: FieldElement[] = []
  let tmpInitialValues = {} as Partial<Values>
  let handleChange: any
  let handleBlur: any

  checkValidateOptions<Values>(validate, validator)

  function runValidator(values: Values) {
    const errors = {} as Errors<Values>
    if (!validator) return errors
    return Object.keys(validator).reduce((result, key) => {
      // TODO: handle any
      const validateFn: any = validator[key]

      if (validateFn && typeof validateFn === 'function') {
        const validateResult = validateFn(values) || {}
        if (!validateResult.ok && validateResult.message) {
          result[key] = validateResult.message
        }
      }

      if (isArray(validateFn)) {
        // TODO: handle any
        const checkResult: any = check(values[key]).pipe(...validateFn)

        if (!checkResult.ok && checkResult.message) {
          result[key] = checkResult.message
        }
      }

      return result
    }, errors)
  }

  function useForm(newInitialValues?: Partial<Values>) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [submitCount, setSubmitCount] = useState(0)
    const [valid, setValid] = useState(false)

    // update when input event
    handleChange = (e: any) => {
      // if (e.persist) e.persist()

      const $node = e.target
      const { name, type, value } = $node
      // TODO: check improve
      if (type === 'checkbox') {
        const checkedValues = get(state.values, name)
        const checked = val($node)
        let newCheckedValues: any // TODO:
        if (checked) {
          newCheckedValues = [...checkedValues, value]
        } else {
          newCheckedValues = checkedValues.filter((item: any) => item !== value)
        }
        setValues((prev: Values) => ({
          ...prev,
          ...set({}, name, newCheckedValues),
        }))
        return
      } else {
        setValues((prev: Values) =>
          produce(prev, draftState => {
            set(draftState, name, val($node))
          }),
        )
      }

      if (isTouched(name)) {
        runValidate()
        validateField(name)
        setValid(checkValid(state.errors))
      }
    }

    handleBlur = (e: any) => {
      const { name } = e.target

      setTouched((prev: Touched<Values>) =>
        produce(prev, draftState => {
          set(draftState, name, true)
        }),
      )

      // if validate
      runValidate()

      if (validator) validateField(name)
      setValid(checkValid(state.errors))
    }

    state = {
      ...state,
      values,
      errors,
      touched,
      submitting,
      submitCount,
      valid,
      handleSubmit,
      handleChange,
      handleBlur,
    }

    if (newInitialValues && !equal(tmpInitialValues, newInitialValues)) {
      setValues((prev: Values) => ({
        ...prev,
        ...newInitialValues,
      }))
      state.values = merge(values, newInitialValues)

      // TODO: 做性能优化
      if (nodes.length) nodes.forEach(initValues)
      tmpInitialValues = newInitialValues
    }

    function initValues(node: FieldElement) {
      // TODO: set values
      if ('checked' in node) {
        if (node.type === 'radio') {
          node.checked = node.value === get(state.values, node.name)
        } else if (node.type === 'checkbox') {
          // TODO: handle checkbox
          node.checked = get(state.values, node.name).indexOf(node.value) > -1
        } else {
          node.value = get(state.values, node.name) || ''
        }
      } else {
        node.value = get(state.values, node.name) || ''
      }
    }

    function runValidate() {
      if (validate) {
        const nextErrors = validate(state.values)
        if (nextErrors) setErrors(nextErrors)
      }
    }

    function validateField(name: string) {
      const fieldValidator: any = get(validator, name)
      let error: string
      if (!fieldValidator) return
      if (typeof fieldValidator === 'function') {
        const { message } = fieldValidator(state.values)
        error = message
      }

      if (isArray(fieldValidator)) {
        const result = check(state.values[name]).pipe(...fieldValidator)

        if (!result.ok && result.message) {
          error = result.message
        }
      }

      setErrors((prev: Errors<Values>) => {
        if (!!error) return { ...prev, [name]: error }
        const { [name]: _, ...nextErrors } = prev
        return nextErrors
      })
    }

    function setAllTouched(nodes: FieldElement[]) {
      const nextTouched = nodes.reduce((result, node) => {
        const { name } = node
        if (name) set(result, name, true)
        return result
      }, {})
      setTouched(nextTouched)
    }

    function isTouched(name: string): boolean {
      if (state.touched[name]) return !!state.touched[name]
      return false
    }

    function handleSubmit(e: Event | FormEvent<HTMLFormElement>) {
      if (e && e.preventDefault) e.preventDefault()
      setSubmitCount(count => count + 1)
      setSubmitting(true)
      setAllTouched(nodes)

      if (validate) {
        const nextErrors = validate(state.values)
        if (nextErrors) setErrors(nextErrors)
      }

      if (validator) {
        const nextErrors = runValidator(state.values)
        if (nextErrors) setErrors(nextErrors)
      }

      const isValid = checkValid(state.errors)
      setValid(isValid)
      if (isValid) onSubmit(state.values, { setSubmitting })
    }

    // Uncontrolled
    useEffect(() => {
      if (!ref) return

      const $form: HTMLFormElement = ref.current

      // TODO:
      if (!$form.querySelector) return
      nodes = getNodes($form)

      nodes.forEach(node => {
        initValues(node)
        node.addEventListener('input', handleChange, false)
        node.addEventListener('blur', handleBlur, false)
      })

      $form.addEventListener('submit', handleSubmit, false)

      return () => {
        $form.removeEventListener('submit', handleSubmit)
      }
    }, [])

    return state
  }

  /**
   * ref for uncontrolled form
   */
  const useRef = () => {
    ref = React.useRef({})
    return ref
  }

  /**
   * Field Component for controlled form
   * @param props
   */
  const Field: React.SFC<FieldProps<Values>> = props => {
    const {
      name,
      children,
      component = 'input',
      value,
      type = 'text',
      ...rest
    } = props
    const { values } = state
    // TODO: handle any
    const field: any = {
      name,
      type,
      value: type === 'radio' || type === 'checkbox' ? value : values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      ...rest,
    }

    if (type === 'radio') {
      field.checked = value === get(state.values, name)
    }

    if (type === 'checkbox') {
      field.checked = get(state.values, name).includes(value)
    }

    if (children && typeof children === 'function') {
      // TODO: handle any
      return <Fragment>{(children as any)(field as FieldParams)}</Fragment>
    }

    return React.createElement(component as any, {
      ...field,
      children,
    })
  }

  /**
   * ErrorMessage Component
   * @param props
   */
  const ErrorMessage: React.SFC<ErrorMessageProps<Values>> = props => {
    const { name, children, component = 'div', ...rest } = props
    const { errors, touched } = state
    if (!touched[name] && !errors[name]) return null
    // TODO: handle any
    const error: any = errors[name]

    if (children && typeof children === 'function') {
      return <Fragment>{children(error)}</Fragment>
    }

    return <Fragment>{createElement(component, rest as any, error)}</Fragment>
  }

  ErrorMessage.defaultProps = {
    className: 'dahlia-form-field-error',
    component: 'div',
  }

  return {
    useRef,
    useForm,
    Field,
    ErrorMessage,
  }
}
