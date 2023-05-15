import axios from 'axios';
import React, { useState } from 'react'

function SearchBar() {

    const [query, setQuery] = useState('');
    const [results, setResult] = useState('');

    const handleSearch = (e => {
        e.preventDefault();

        axios.get('http://localhost:8000/AddMovie')
        .then((response) => {
            setResult(response.data);
           
            console.log(results)
        })
        .catch((error) => {
            console.error('Error searching: ', error)
        });
    })

  return (
    <div>
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
            />
            <button type="submit">🔍</button>
        </form>



    
        {Array.isArray(results) && results.length > 0 ? (
  results.map((item) => {
    if (item.name === query) {
      return (
        <React.Fragment key={item.id}>
          <div>{item.name}</div>
          <div className='poster'>
            <img src={item.poster} alt={item.name} />
          </div>
        </React.Fragment>
      );
    } else {
      return null; // or any other fallback if you don't want to render anything
    }
  })
) : (
  <p>No results found.</p>
)}
   
       

    </div>
  )
}

export default SearchBar