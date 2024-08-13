import React, { useEffect, useState } from 'react';
import './style/header.css'
import logo from '../assets/images/netflix.svg'
import { Link } from 'react-router-dom';


const Header = () => {

  const [show, setShow] = useState(true)

  useEffect(() => {

    const hideHeader = () => {
      if(window.scrollY > 100) {
        setShow(true)
      }else {
        setShow(false)
      }
    }

      window.addEventListener('scroll', hideHeader);
      return () => {window.removeEventListener('scroll', hideHeader)}
  }, [])
  

  return (
    <header className={show ? 'header transparent' : 'header' }>
      <Link to='/login'><img className='img_logo' src={ logo } alt="logo" /></Link>
      
      <Link to='/login'><button className='subscribe'>Iniciar Seccion</button></Link>
      
    </header>
  )
}

export default Header