import {useNavigate} from 'react-router-dom'

import './index.css'

const Header = () => {
  const history = useNavigate()

  const userLogout = () => {
    localStorage.removeItem('userDetails')
    history('/')
  }
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <img
          className="logo-image"
          alt="company logo"
          src="https://res.cloudinary.com/dahw90b2z/image/upload/v1659775702/heartylablogo_ss3hp1.jpg"
        />
        <ul className="menus-container">
          <li className="menu-items">Home</li>
          <li className="menu-items">Services</li>
          <li className="menu-items">About</li>
          <li className="menu-items">Blog</li>
          <li className="menu-items">
            <button
              className="btn btn-dark sign-in-btn mr-4 mt-3"
              onClick={userLogout}
              type="submit"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
