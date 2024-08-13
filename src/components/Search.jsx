import React, { useState } from 'react'
import './style/search.css'

const Search = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value.trim().toLowerCase());
    //
    onSearch(query)
  };
  

  return (
    <form onSubmit={handleSubmit} className='search'> 
      <input className='input_search' type="text"  id='query'/>
      <button className='buttom_search'><i className='bx bx-search-alt-2'></i></button>
    </form>
  )
}

export default Search