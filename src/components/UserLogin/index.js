import {Formik, Form, Field} from 'formik'

import * as Yup from 'yup'
import {useState} from 'react'
import {useNavigate, NavLink} from 'react-router-dom'

import TextField from '../TextField'
import './index.css'

const UserLogin = () => {
  const [email, setuserEmail] = useState('')
  const [confirmPassword, setuserPassword] = useState('')

  const history = useNavigate()

  //   const name = localStorage.getItem('userDetails')
  //     ? localStorage.getItem('userName')
  //     : 'admin@india.com'
  //   //   console.log(name)

  //   const password = localStorage.getItem('UserPassword')
  //     ? localStorage.getItem('UserPassword')
  //     : 'password123'

  const getLoginCredentials = localStorage.getItem('userDetails')
  //   console.log(getLoginCredentials)

  //   const handleSubmit = e => {
  //     e.preventDefault()
  //     if (userEmail === name && userPassword === password) {
  //       console.log('login successful')
  //     } else {
  //       console.log('invalid login id or password')
  //     }
  //   }

  const validate = Yup.object({
    email: Yup.string()
      .email('Email Id is invalid')
      .required('Email Id is Required'),
    confirmPassword: Yup.string()
      .min(6, 'Password must be at least 6 character')
      .required('Password Required'),
  })

  return (
    <Formik
      initialValues={{
        email: '',
        confirmPassword: '',
        toggle: false,
      }}
      validationSchema={validate}
      onSubmit={values => {
        // console.log(values)
        // console.log(values.userEmail)
        // console.log(values.userPassword)
        // console.log(getLoginCredentials)
        if (getLoginCredentials && getLoginCredentials.length) {
          //   console.log(getLoginCredentials)
          const parsedUserData = JSON.parse(getLoginCredentials)
          //   console.log(parsedUserData)
          const userLogin = parsedUserData.filter(
            element =>
              element.email === values.email &&
              element.confirmPassword === values.confirmPassword,
          )
          console.log(userLogin)
          if (userLogin.length === 0) {
            alert('email id or password incorrect!')
          } else {
            alert('Login Successful')
            console.log('login successfully')
            history('/user')
          }
        } else {
          alert("user doesn't exist")
          console.log('user doesn\\t exist"')
        }
      }}
    >
      {formik => (
        <div>
          {/* {console.log(formik.values)} */}
          <Form className="form">
            <h1 className="heading">Sign In</h1>
            <TextField
              label="User Name"
              placeholder="Enter Email Id"
              name="email"
              value={formik.values.setuserEmail}
              onChange={formik.handleChange}
              type="text"
            />
            <TextField
              label="Password"
              placeholder="Enter your password"
              value={formik.values.setuserPassword}
              onChange={formik.handleChange}
              name="confirmPassword"
              type="text"
            />
            <div className="rememberMe-container">
              <label>
                <Field type="checkbox" name="toggle" />
                <span className="checkboxLabel">Remember me</span>
                {/* {`${values.toggle}`} */}
              </label>
            </div>

            <button
              className="btn btn-primary sign-in-btn mr-4 mt-3"
              type="submit"
            >
              Sign In
            </button>

            <p className="forgot-text">
              <NavLink to="/">Forgot password?</NavLink>
            </p>
            <p>
              Do you have an account?{' '}
              <span>
                <NavLink to="/singUp">Sign up</NavLink>
              </span>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default UserLogin
