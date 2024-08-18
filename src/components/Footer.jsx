import React from 'react'
import './style/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_card'>
      <p>Empresa</p>
      <ul>
        <li>Término de uso</li>
        <li>Privacidad</li>
        <li>Preferencia de cookies</li>
        <li>Información corporativa</li>
      </ul>
      </div>
      
      <div className='footer_card'>
        <p>Conectar</p>
        <ul>
          <li>Contáctanos</li>
        </ul>
        <ul className='sociales'>
          <li><i className='bx bxl-twitter'></i></li>
          <li><i className='bx bxl-instagram'></i></li>
          <li><i className='bx bxl-facebook'></i></li>
        </ul>
      </div>
      <div className='footer_card'>
        <p>Legal</p>
        <ul>
          <li>Términos y condiciones</li>
          <li>Privacidad</li>
          <li>Preferencia de cookies</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer