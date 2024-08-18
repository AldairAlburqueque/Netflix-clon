import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/movie.css';
import Popular from '../components/Popular';
import MasValorados  from '../components/MasValorados';
import Search from '../components/Search';
import { useNavigate, useParams } from 'react-router-dom';
import Proximamente from '../components/Proximamente';


const Movies = () => {  

  const ApiKey = 'c026943b0cb2466967f089cff7e72a57'

  const [movies, setMovies] = useState('');
  const [results, setResults ] = useState([]);

  const [banner, setBanner] = useState([]);

  const id = useParams();
  const navigate = useNavigate();

const handleSearch = term =>{
  setMovies(term);
  if (term) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${term}`;
    axios.get(url)
      .then( res => setResults(res.data.results || []))
      .catch(err => console.log(err))
  }
}

useEffect(() => {

  const updateBanner = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}`
    axios.get(url)
      .then(res => {
        const random = Math.floor(Math.random() * res.data.results.length);
        setBanner(res.data.results[random])
      })
      .catch(err => console.log(err))
  }

  updateBanner();
  const intervalId = setInterval(updateBanner, 5000);

  return () => clearInterval(intervalId);

}, [])

// useEffect(() => { 
//   handleSearch(); 
// }, [])

  return (
      
      <div className="content">
        
        <Search onSearch={handleSearch} />
        {movies ? (
          
          <div className='movie_search'>
            <h2>Resultado de su busqueda</h2>
            <div className="movies_container">
              {results.length > 0 ? (
                results?.map((movie) => (
                  <div key={movie.id} className="movie">
                    <h3>{movie.title}</h3>
                    <img className='img_tmdb' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} onClick={() => navigate(`/movies/${movie.id}`)}/>
                  </div>
                ))
              ) : (
                <p>No movies found</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className='banner' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${banner.backdrop_path}")`}}>
              <div className='banner_info'>
                <h1 className='banner_title'>{banner.title}</h1>
                <p>{banner.overview}</p>
              </div>
              <div className='banner_degreed'></div>
            </div>
            <div className='banner_session'>
              <Popular ApiKey={ApiKey}  />
              <MasValorados ApiKey={ApiKey}/>
              <Proximamente ApiKey={ApiKey}/>
            </div>
            
          </div>
        )}
        
      </div>
    );
    
  
}

export default Movies