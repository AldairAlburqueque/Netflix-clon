import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './style/sections.css'
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Section = ({ApiKey, section, title}) => {

  const [sections, setSections] = useState();

  const navigate = useNavigate();

    useEffect(() => {
      const url = `https://api.themoviedb.org/3/movie/${section}?api_key=${ApiKey}`;

    axios.get(url)
    
      .then( res => setSections(res.data))
      .catch( err => console.log(err))

    }, [])

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
            initialSlide: -4,
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            initialSlide: 0,
            slidesToShow: 5, 
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            initialSlide: 0,
            slidesToShow: 4, 
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            initialSlide: 0,
            slidesToShow: 3, 
            slidesToScroll: 2
          }
        }
      ]
    };


  return (
    <div className='sections'>
      <h1 className='sections_title'>{title}</h1>
      <div className='sections_card'>
        { sections && (
          <Slider {...settings}>
          {
            sections?.results.map( v => (
              <div className="sections_content" key={v.id}>
                <img className='sections_img' key={v.id} src={`https://image.tmdb.org/t/p/w500${v.poster_path}`} onClick={()=> navigate(`/movies/${v.id}`)}/>
              </div>
            ))
          }
          </Slider>
        )}
      </div>
    </div>

  )
}

export default Section