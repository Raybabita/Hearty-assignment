import SignUpForm from '../SignUpForm'
import './index.css'

const RegisterForm = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-5 order-2 col-sm-5  mt-3">
        <SignUpForm />
      </div>
      <div className="col-md-7 col-sm-7 order-1 image-container">
        <img
          className="login-Image"
          src="https://res.cloudinary.com/dahw90b2z/image/upload/v1648981341/Layer_2_cq7mgu.png"
          alt="login pic"
        />
      </div>
    </div>
  </div>
)

export default RegisterForm
