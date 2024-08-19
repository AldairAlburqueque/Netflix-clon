import React from 'react'
import './style/homeInfo.css'

import enjoy from '../assets/images/tv-img.png'
import down from '../assets/images/download-img.jpg'
import watch from '../assets/images/watch-img.png'
import kids from '../assets/images/kids-img.png'


const HomeInfo = () => {
  return (
    <div className='homeInfo'>
      <div className='home_enjoy'>
        <h2 className='title_enjoy'>Disfruta en tu TV</h2>
        <p className='p_enjoy'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
        <div className='multi_enjoy'>
          <img className='img_enjoy' src={enjoy} alt="" />
          <div className='monitor_enjoy'>
            <video autoPlay playsInline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4'/>
            </video>
          </div>
        </div>
      </div>

      <div className='home_down'>
        <h2 className="title_down">Descarga tus series para verlas offline</h2>
        <p className="p_down">Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
        <div className='multi_down'>
          <img src={down} alt="" className="down_img" />
          <div className="down_card-multi">
            <div className="down_card-img">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            </div>
            <div className="down_card-text">
              <h5>Stranger Things</h5>
              <p>Descargando...</p>
            </div>
            <div className="down_card-gif"></div>
          </div>
        </div>
      </div>

      <div className="home_watch">
        <h2 className="title_watch">Disfruta donde quieras</h2>
        <p className="p_watch">Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.</p>
        <div className="multi_watch">
          <img src={watch} alt="" className="watch_img" />
          <div className='monitor_watch'>
            <video autoPlay playsInline muted loop>
              <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'/>
            </video>
          </div>
        </div>
      </div>

      <div className="home_kids">
        <h2 className="title_kids">Crea perfiles para niños</h2>
        <p className="p_kids">Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
        <div className="multi_kids">
          <img src={kids} alt="" className="kids_img" />
        </div>
      </div>

      <div className="home_preguntas">
        <h2 className="preguntas_title">Preguntas frecuentes</h2>
        <details>
          <summary>¿Qué es Netflix?</summary>
          <p>Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</p>
        </details>
        <details>
          <summary>¿Cuánto cuesta Netflix?</summary>
          <p>Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/ 24.90 hasta S/ 44.90 al mes. Sin costos adicionales ni contratos.</p>
        </details>
        <details>
          <summary>¿Qué puedo ver en Netflix?</summary>
          <p>Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.</p>
        </details>
      </div>
    </div>
  )
}

export default HomeInfo