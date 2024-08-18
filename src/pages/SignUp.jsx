import React, { useState } from 'react';
import './style/signup.css'

import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import bcrypt from 'bcryptjs'


const SignUp = () => {

  const [passwordStorage, setPasswordStorage] = useState('')
  const [emailStorage, setEmailStorage] = useState('')

  const navigate = useNavigate();

  const { authEmail } = useSelector(store => store)


  // const handlePassword = e => {
  //   e.preventDefault();
  //   dispatch(setPassword(e.target.password.value.trim()));
  //   e.target.password.value = '';
  //   localStorage.setItem('passwordStorage', passwordStorage)
  //   navigate('/login')
  // }

//////

  const handleRegister = async (e) => {
    e.preventDefault();

    // Encriptar la contraseña antes de guardarla en localStorage
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordStorage, saltRounds);

    // Guardar el email y la contraseña encriptada en localStorage
    localStorage.setItem('userEmail', emailStorage);
    localStorage.setItem('userPassword', hashedPassword);

    navigate('/login')
  };

  return (
    <>
    <Header />
    <div className='signup'> 
      <div className="signup_card">
      <h2>¡Hola de nuevo!</h2>
      <h3>Suscribate a Netflix es fácil.</h3>

      <h5>Ingresa tu contraseña para comenzar a ver al instante.</h5>
      <h5></h5>

      <form className='form_signup' onSubmit={handleRegister}>
{/* 
        <div>
          <div><p>Email</p></div>
          <div><p>{authEmail}</p></div>
        </div> */}

      <input className='signup_password' type="email" placeholder='email' id='email' value={emailStorage} onChange={(e) => setEmailStorage(e.target.value)} />

      <input className='signup_password' type="password" placeholder='Ingresa tu contraseña' id='password' value={passwordStorage} onChange={(e) => setPasswordStorage(e.target.value)} />

      <span>¿Olvidastes tu contraseña?</span>

      <button className='button'>Siguiente</button>
      </form>

      </div>
      
    </div>
    </>
    
  )
}

export default SignUp