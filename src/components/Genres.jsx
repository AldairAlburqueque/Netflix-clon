import axios from 'axios'
import React from 'react'

export const Genres = ({ApiKey}) => {

  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key${ApiKey}`

  axios.get(url)
    .then( res => console.log(res.data))
    .catch((err) => console.log(err))
  return (
    <div>Genres</div>
  )
}
