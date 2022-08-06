import {useNavigate} from 'react-router-dom'
import RegisterForm from '../RegisterForm'

import './index.css'

const Home = () => {
  const history = useNavigate()
  const userSignUpBtn = () => {
    history('/singUp')
  }

  const userLogInBtn = () => {
    history('/login')
  }
  return (
    <>
      <div className="home-container" inline-style="position: relative;">
        <div className="heading-container">
          <h1>Hearty Lab</h1>
          <p>
            Fully automated analysis of the left ventricle using AI. Include
            measurements from Pulse EchoLab in your Pulse reports
          </p>
          <div className="sign-up-btn-container">
            <button className="explore-btn" onClick={userSignUpBtn}>
              Sign Up{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
            <span>Or</span>
            <button className="explore-btn" onClick={userLogInBtn}>
              Log In{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
          <section>
            <div className="box-container">
              <div className="shadow-lg left ">
                <h1 className="title">Automated State Of Heart</h1>
              </div>
              <div className="shadow-lg right ">
                <div className="content">
                  <h1>Cardiology Platform</h1>
                  <div>
                    <p>
                      Pulse is the cloud-native cardiology imaging platform for
                      clinicians that want to save time and drive efficiency.{' '}
                      <button className="btn btn-dark">
                        <span className="explore-more">Explore more</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="custom-shape-divider-top-1659759679">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              />
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              />
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-row ">
            <div className="col-2 footer-custom-1">
              <h3>Download our app</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</p>
              <div className="app-logo">
                <img
                  className="play-store-logo"
                  src="https://res.cloudinary.com/dahw90b2z/image/upload/v1659777828/play-store_q4boy6.png"
                />
                <img
                  className="play-store-logo"
                  src="https://res.cloudinary.com/dahw90b2z/image/upload/v1659777807/app-store_vigzzk.png"
                />
              </div>
            </div>
            <div className="col-2">
              <img
                className="company-logo"
                src="https://res.cloudinary.com/dahw90b2z/image/upload/v1659775702/heartylablogo_ss3hp1.jpg"
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</p>
            </div>
            <div className="col-2 footer-custom-2 ">
              <h3>Useful links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="col-2">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2020 -Online store</p>
      </div>
    </>
  )
}

export default Home
