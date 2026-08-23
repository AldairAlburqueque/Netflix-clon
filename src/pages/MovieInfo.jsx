import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style/movieInfo.css";
import ApiKey from "../utils/urls";
import log from "../assets/images/netflix.svg";
import View from "../components/View";

const MovieInfo = () => {
  const { id } = useParams();

  const [movieId, setMovieId] = useState();
  const [video, setVideo] = useState();
  const [watch, setWatch] = useState(false);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`;

    axios
      .get(url)
      .then((res) => setMovieId(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`;

    axios
      .get(url)
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleView = () => {
    setWatch(true);
  };

  if (!movieId) {
    return (
      <div className="movieInfo_loading">
        <div className="loading_spinner"></div>
        <p>Cargando película...</p>
      </div>
    );
  }

  return (
    <div
      className="movieInfo"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieId.backdrop_path})`,
      }}
    >
      <div className="movieInfo_overlay"></div>

      {/* NAVBAR */}
      <header className="movieInfo_header">
        <Link to="/movies">
          <img className="movie_logo" src={log} alt="Netflix" />
        </Link>

        <Link to="/movies" className="back_button">
          <i className="bx bx-arrow-back"></i>
          <span>Volver</span>
        </Link>
      </header>

      {/* CONTENIDO */}
      <main className="movieInfo_content">
        {/* POSTER */}
        <div className="movieInfo_poster_container">
          <img
            className="movieInfo_img"
            src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
            alt={movieId.title}
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="movieInfo_info">
          <span className="movieInfo_type">PELÍCULA</span>

          <h1>{movieId.title}</h1>

          <div className="movieInfo_meta">
            <span>{movieId.release_date?.substring(0, 4)}</span>

            <span className="meta_separator">•</span>

            <span>
              {movieId.runtime
                ? `${Math.floor(movieId.runtime / 60)}h ${movieId.runtime % 60}min`
                : "Duración no disponible"}
            </span>

            {movieId.vote_average && (
              <>
                <span className="meta_separator">•</span>

                <span className="rating">
                  <i className="bx bxs-star"></i>
                  {movieId.vote_average.toFixed(1)}
                </span>
              </>
            )}
          </div>

          {/* GÉNEROS */}
          <div className="generos">
            {movieId.genres?.map((genre) => (
              <span key={genre.id} className="genre_badge">
                {genre.name}
              </span>
            ))}
          </div>

          {/* DESCRIPCIÓN */}
          <div className="descripcion">
            <h3>Descripción</h3>

            <p>{movieId.overview || "No hay descripción disponible."}</p>
          </div>

          {/* BOTÓN */}
          <div className="movie_actions">
            <button className="play_button" onClick={handleView}>
              <i className="bx bxs-right-arrow"></i>
              Reproducir
            </button>

            <button className="favorite_button">
              <i className="bx bx-plus"></i>
              Mi lista
            </button>
          </div>
        </div>
      </main>

      {/* VIDEO */}
      {watch && (
        <div className="video_modal">
          <View video={video} setWatch={setWatch} />
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
