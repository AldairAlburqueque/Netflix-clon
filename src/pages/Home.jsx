import React, { useState } from 'react'
import './style/home.css'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setName } from '../store/slices/email.slice'
import HomeInfo from '../components/HomeInfo'
import Footer from '../components/Footer'

const Home = () => {

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    setEmail(e.target.email.value)
    dispatch(setName(e.target.email.value.trim()))
    e.target.email.value = ''
    // localStorage.setItem('email', email)
    navigate('./signup')    
  }


  return (
    <>
      <Header />
    <div className='home'>
      <div className="info">
        <h4>Películas y series ilimitadas y mucho más</h4>
        <h5>Disfruta donde quieras. Cancela cuando quieras.</h5>
        <h6>¿Quieres ver Netflix ya? Ingresa tu email o número de celular para crear una cuenta o reiniciar tu membresía.</h6>
        <form className="inputs" onSubmit={handleSubmit}>
          <input type="email" id='email' placeholder='Email' />
          <button>Comenzar</button>
        </form>
      </div>      
    </div>
    <HomeInfo />
    <Footer />
    </>
  )
}

export default Home;