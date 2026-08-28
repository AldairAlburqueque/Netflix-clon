import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/movie.css";

import Search from "../components/Search";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Section from "../components/Section";
import ApiKey from "../utils/urls";

const Movies = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const [banner, setBanner] = useState(null);
  const [loadingBanner, setLoadingBanner] = useState(true);

  const popular = "popular";
  const topRated = "top_rated";
  const upcoming = "upcoming";

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term) {
      setResults([]);
      return;
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${encodeURIComponent(term)}`;

    axios
      .get(url)
      .then((res) => {
        setResults(res.data.results || []);
      })
      .catch((err) => {
        console.error("Error buscando películas:", err);
        setResults([]);
      });
  };

  /*
   * BANNER
   */
  useEffect(() => {
    const getBanner = () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=es-ES`;

      axios
        .get(url)
        .then((res) => {
          const movies = res.data.results || [];

          if (movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);

            setBanner(movies[randomIndex]);
          }

          setLoadingBanner(false);
        })
        .catch((err) => {
          console.error("Error obteniendo banner:", err);

          setLoadingBanner(false);
        });
    };

    getBanner();

    const intervalId = setInterval(getBanner, 10000);

    return () => clearInterval(intervalId);
  }, []);

  /*
   * PELÍCULA SELECCIONADA
   */
  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="movies_page">
      <Search onSearch={handleSearch} />

      {/* =====================================
          BUSCADOR
      ===================================== */}

      {searchTerm ? (
        <section className="movie_search">
          <div className="search_header">
            <h2>
              Resultados para:
              <span> "{searchTerm}"</span>
            </h2>

            <button
              className="clear_search"
              onClick={() => {
                setSearchTerm("");
                setResults([]);
              }}
            >
              <i className="bx bx-x"></i>
              Limpiar
            </button>
          </div>

          {results.length > 0 ? (
            <div className="movies_container">
              {results.map((movie) => (
                <article
                  key={movie.id}
                  className="movie"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <div className="movie_image_container">
                    {movie.poster_path ? (
                      <img
                        className="img_tmdb"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <div className="movie_no_image">Sin imagen</div>
                    )}

                    <div className="movie_overlay">
                      <i className="bx bx-play-circle"></i>
                    </div>
                  </div>

                  <h3>{movie.title}</h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="no_results">
              <i className="bx bx-search-alt"></i>

              <h3>No encontramos películas</h3>

              <p>Intenta buscar con otro título.</p>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* =====================================
              BANNER
          ===================================== */}

          <section
            className={`banner ${loadingBanner ? "banner_loading" : ""}`}
            style={
              banner?.backdrop_path
                ? {
                    backgroundImage: `
                      url(
                        https://image.tmdb.org/t/p/original${banner.backdrop_path}
                      )
                    `,
                  }
                : {}
            }
          >
            {banner && (
              <div className="banner_content">
                <div className="banner_info">
                  <span className="banner_category">PELÍCULA</span>

                  <h1 className="banner_title">{banner.title}</h1>

                  <div className="banner_meta">
                    {banner.release_date && (
                      <span>{banner.release_date.substring(0, 4)}</span>
                    )}

                    {banner.vote_average > 0 && (
                      <>
                        <span>•</span>

                        <span className="banner_rating">
                          <i className="bx bxs-star"></i>
                          {banner.vote_average.toFixed(1)}
                        </span>
                      </>
                    )}
                  </div>

                  <p>
                    {banner.overview ||
                      "Descubre esta película y disfruta de su historia."}
                  </p>

                  <button
                    className="banner_button"
                    onClick={() => handleMovieClick(banner.id)}
                  >
                    <i className="bx bxs-right-arrow"></i>
                    Ver película
                  </button>
                </div>
              </div>
            )}

            <div className="banner_gradient"></div>
          </section>

          {/* =====================================
              SECCIONES
          ===================================== */}

          <main className="banner_session">
            <Section ApiKey={ApiKey} section={popular} title="Populares" />

            <Section ApiKey={ApiKey} section={topRated} title="Más valorados" />

            <Section ApiKey={ApiKey} section={upcoming} title="Próximamente" />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Movies;
