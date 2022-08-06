import {ErrorMessage, useField} from 'formik'
import './index.css'

const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="errorDisplay"
      />
    </div>
  )
}

export default TextField
