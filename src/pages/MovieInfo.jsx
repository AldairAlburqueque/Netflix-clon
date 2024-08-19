import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style/movieInfo.css'
import ApiKey from '../utils/urls'

import log from '../assets/images/netflix.svg'
import View from '../components/View';


const MovieInfo = () => {

  const {id} = useParams();

  const [movieId, setMovieId] = useState();
  const [video, setVideo] = useState();
  const [watch, setWatch] = useState(false);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`
    axios.get(url)
      .then (res => setMovieId(res.data))
      .catch((err) => console.log(err)
      )
  }, [id])


  ////////////////////////

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`
    axios.get(url)
      .then(res => setVideo(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const handleView = () => {
    setWatch(true)
    }
  

  return (
    <div className='movieInfo'>
        <Link  to='/movies' className='link'><img className='movie_logo' src={log} alt="" /></Link>
      <div className={`movieInfo_card back-${movieId?.genres[0].name}`} style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movieId?.backdrop_path}")`, height: '100vh'}}>
        <img className='movieInfo_img' src={`https://image.tmdb.org/t/p/w500${movieId?.poster_path}`} alt="" />
        <div className='movieInfo_info'>
          <h2>{movieId?.title}</h2>
          <div className='descripcion'>
            <h3>Descripción</h3>
            <p>{movieId?.overview}</p>
          </div>
        
        <div className='movie_description'>
          <div className='generos'>
            <h3>Géneros</h3>
            {
              movieId?.genres.map((e) =>(
                <p key={e.id}>{e.name}</p>
              ))
            }
          </div>
          <div className='fecha'>
            <h3>Fecha Lanzamiento</h3>
            <p>{movieId?.release_date}</p>
          </div>
          <div className='view'>
            <i className='bx bxs-right-arrow' onClick={ handleView }>Reproducir</i>
            {
              watch && (
                <View video={video} setWatch={setWatch}/>
              )
            }
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;