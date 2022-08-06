import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import UserDashboard from './components/UserDashboard'
import Header from './components/Header'
import RegisterForm from './components/RegisterForm'

import './App.css'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/singUp" element={<RegisterForm />} />
      <Route path="/user" element={<UserDashboard />} />
    </Routes>
  </>
)
export default App
