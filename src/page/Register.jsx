import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import credentials from '../credential.json'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    nom: '',
    prenom: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = credentials.find(user => user.email === formData.email)

    if (!user) {
      alert('This account already exists')
    } else if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match')
    } else {
      localStorage.setItem('login', true)
      localStorage.setItem('email', formData.email)
      localStorage.setItem('money', 0)
      localStorage.setItem('gold', 0)
      localStorage.setItem('silver', 0)
      navigate('/invest')
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder='Nom'
        />
      </div>

      <div>
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder='Prenom'
        />
      </div>

      <div>
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

      <div>
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

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Password'
        />
      </div>

      <button type="submit">Register</button><br />
      <button type="button" onClick={() => navigate('/auth')}>Login</button>
    </form>
  )
}

export default Register