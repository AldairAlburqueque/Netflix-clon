// import React, { useState } from 'react'
// import './style/search.css'

// const Search = ({ onSearch }) => {

//   const [query, setQuery] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     setQuery(e.target.query.value.trim().toLowerCase());
//     //
//     onSearch(query)
//   };

//   return (
//     <form onSubmit={handleSubmit} className='search'>
//       <input className='input_search' type="text"  id='query'/>
//       <button className='buttom_search'><i className='bx bx-search-alt-2'></i></button>
//     </form>
//   )
// }

// export default Search

import React, { useState } from "react";
import "./style/search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const term = query.trim().toLowerCase();

    onSearch(term);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search_input_container">
        <i className="bx bx-search"></i>

        <input
          className="input_search"
          type="text"
          placeholder="Buscar películas..."
          value={query}
          onChange={handleChange}
        />

        {query && (
          <button
            type="button"
            className="search_clear"
            onClick={() => setQuery("")}
          >
            <i className="bx bx-x"></i>
          </button>
        )}
      </div>

      <button type="submit" className="button_search">
        Buscar
      </button>
    </form>
  );
};

export default Search;
