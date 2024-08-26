import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/movie.css';
import Popular from '../components/Popular';
import MasValorados  from '../components/MasValorados';
import Search from '../components/Search';
import { useNavigate, useParams } from 'react-router-dom';
import Proximamente from '../components/Proximamente';
import Footer from '../components/Footer';
import logo from '../assets/images/netflix.svg'


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
          
            <svg className='svg_img' viewBox="0 -109.31 300 300" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#b81d24"> <path d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1"></path> </g> </g></svg>
      
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
              <Footer />
            </div>
            
          </div>
        )}
        
      </div>
    );
    
  
}

export default Movies