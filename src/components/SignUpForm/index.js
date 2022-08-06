import {NavLink, useNavigate} from 'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from '../TextField'

import './index.css'

const SignUpForm = () => {
  const history = useNavigate()

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('Required'),
    lastName: Yup.string()
      .max(15, 'Must be 20 character or less')
      .min(2, 'Must be LastName More Character')
      .required('Required'),
    email: Yup.string()
      .email('Email Id is invalid')
      .required('Email Id is Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 character')
      .required('Password Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password Must Match')
      .required('Confirm Password is Required'),
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(value, {resetForm}) => {
        console.log(value.email)
        console.log(value.confirmPassword)
        localStorage.setItem('userDetails', JSON.stringify([value]))
        alert('registration successfully')
        resetForm({value: ''})
        history('/login')
      }}
    >
      {formik => (
        <div>
          {/* {console.log(formik.values)} */}
          <Form className="form">
            <h1 className="heading">Sign Up</h1>
            <TextField
              label="First Name"
              placeholder="First Your Name"
              name="firstName"
              type="text"
            />
            <TextField
              label="Last Name"
              placeholder="Last Your Name"
              name="lastName"
              type="text"
            />
            <TextField
              label="Email Id"
              placeholder="Enter Email Id"
              name="email"
              type="text"
            />
            <TextField
              label="Password"
              placeholder="Enter Password"
              name="password"
              type="password"
            />
            <TextField
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div>
              <button className="btn btn-dark mr-4 mt-3" type="submit">
                Register
              </button>
              <button className="btn btn-primary mt-3 reset" type="reset">
                Reset
              </button>
            </div>
            <p className="already-have-account-text">
              Already Have an Account{' '}
              <NavLink to="/login">
                <span>Sign In</span>
              </NavLink>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default SignUpForm
