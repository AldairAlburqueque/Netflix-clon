import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import './style/proximamente.css'

const Proximamente = ({ ApiKey }) => {

  const [proximamente, setProximamente] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}`
    axios.get(url)
    .then(res => setProximamente(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(proximamente)

  const settings = {
    initialSlide: 0,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5, 
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4, 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 className="prox_title">Proximamente</h1>
      <div className="prox_card">
        {proximamente && (
          <Slider {...settings}>
            {
              proximamente?.results.map( r =>(
                <div className="prox_content" key={r.id}>
                  <img src={`https://image.tmdb.org/t/p/w500${r.poster_path}`} alt="" className="prox_img" onClick={() => navigate(`/movies/${r.id}`) } />
                </div>
              ))
            }
          </Slider>
        )}
      </div>

    </div>
  )
}

export default Proximamente