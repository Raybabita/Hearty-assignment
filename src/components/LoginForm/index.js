import UserLogin from '../UserLogin'
import './index.css'

const LoginForm = () => (
  <div className="log-in-container mt-5">
    <div className="row">
      <div className="col-md-5 col-sm-5 order-2  mt-3">
        <UserLogin />
      </div>
      <div className="col-md-7 col-sm-7 order-1 image-container">
        <img
          className="login-Image"
          src="https://res.cloudinary.com/dahw90b2z/image/upload/v1658677814/login_new_wmuahj.jpg"
          alt="Sign In pic"
        />
      </div>
    </div>
  </div>
)
export default LoginForm
