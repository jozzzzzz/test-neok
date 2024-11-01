import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import credentials from '../credential.json'
import '../css/authentication.css'

const Authentication = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = credentials.find(user => user.email === formData.email && user.password === formData.password)
    if (!user) {
      alert('Invalid email or password')
    } else {
      localStorage.setItem('login', true)
      localStorage.setItem('email', formData.email)
      localStorage.setItem('money', user.money)
      localStorage.setItem('gold', user.or)
      localStorage.setItem('silver', user.argent)
      navigate('/invest')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className='field'>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email Address'
        />
      </div>

      <div className='field'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />
      </div>

      <button type="submit">Login</button><br />
      <button type="button" onClick={() => navigate('/register')}>Register</button>
    </form>
  )
}

export default Authentication