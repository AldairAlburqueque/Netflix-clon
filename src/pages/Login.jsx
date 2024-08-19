import React, { useState } from 'react'
import './style/login.css'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'

const  Login = () => {   

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // const handleLogin = () => {
  //   const emailStorage = localStorage.getItem('email');
  //   const passwordStorage = localStorage.getItem('passwordStorage');

  //   if(email === emailStorage && password === passwordStorage) {
  //     navigate('/movies')
  //   } else {
  //     alert('Email o password incorrectos')
  //   }
  // }

  //////////////////////////

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Recuperar los datos almacenados en localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('userPassword');

    // Verificar la contraseña ingresada con la almacenada
    const isPasswordCorrect = await bcrypt.compare(password, storedPassword);

    if (storedEmail === email && isPasswordCorrect) {

      if (isPasswordCorrect) {
        navigate('/movies')
      }
    } else {
      alert('Correo electrónico incorrecto o password');
    }
  };
  

  return (
    <>
      <Header />
      <div className='login'>
      <div className="card_login">
      <h2>Inicia sesión</h2>
      <form  className='form_login' onSubmit={handleLogin }>
        <input type="email" placeholder='Email o número de celular' className='email_input' id='email' value={email}onChange={handleEmailChange}/>
        <input type="password" placeholder='Contraseña' className='password_input' id='password' value={password}onChange={handlePasswordChange} />
        <button className='inicia_sesion'>Inicia sesión </button>
      </form>
      <span>¿Primera vez en Netflix? <Link to='/' className='login_suscribe'>Suscríbete ahora.</Link></span>
      </div>
      
    </div>
    </>
    
  )
}

export default Login