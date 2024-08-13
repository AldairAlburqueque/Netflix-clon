import React, { useState } from 'react'
import './style/home.css'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setName } from '../store/slices/email.slice'

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
        <h4>Unlimited films, TV programmes and more.</h4>
        <h5>Watch anywhere. Cancel at any time.</h5>
        <h6>Ready to watch? Enter your Email to crete or restar your membership.</h6>

        <form className="inputs" onSubmit={handleSubmit}>
          <input type="email" id='email' placeholder='Email' />
          <button>GET STARTED</button>
        </form>

      </div>
      
    </div>
    </>
  )
}

export default Home;