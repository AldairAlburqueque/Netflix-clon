import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style/popular.css'
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Popular = ({ApiKey}) => {

  const navigate = useNavigate();

  const [ popular, setPopular] = useState();

    useEffect(() => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;

      axios.get(url)
        .then( res => setPopular(res.data))
        .catch( err => console.error(err));

    }, []);    

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
    <div className='slider_container'>
      <h1 className='popular_title'>Populares</h1>
      <div className='popular_card'>
        {popular && (
      <Slider {...settings} >
        {    
          popular?.results.map((p)=>(
            <div className='popular_content' key={p.title} >
              <img className='popular_img' src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}  alt=""  onClick={()=> navigate(`/movies/${p.id}`)} />
            </div>
            ))
        }
      </Slider>
        )}
      </div>
    </div>
  )
}


export default Popular;


