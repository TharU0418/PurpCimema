import axios from 'axios';
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';

function SearchPage() {

    // search box
    const [query, setQuery] = useState('');
    const [results, setResult] = useState('');

    // drop down
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [dropresults, setDropResult] = useState('');


    // search
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
    });

    // drop down

    const options = ['watched', 'watchlist', 'future'];
    const options2 = ['Action', 'Adventure', 'Animation','Comedy','Romance'];
    const options3 = ['2023', '2022', '2021','2020', '2019', '2018','2017', '2016', '2015','2014', '2013', '2012'];

    // const options = [{ label: 'watched'},
    //                  {label: 'watchlist'},
    //                 {label: 'future'} ];

    // const options2 = [{ label: 'Action'},
    //                  {label: 'Adventure'},
    //                  {label: 'Animation'},
    //                  {label: 'Comedy'},
    //                  {label: 'Crime'},
    //                  {label: 'Drama'},
    //                  {label: 'Horror'},
    //                 {label: 'Romance'} ];

    // const options3 = [{ label: '2023'},
    //                 {label: '2022'},
    //                 {label: '2021'},
    //                 {label: '2020'},
    //                 {label: '2019'},
    //                 {label: '2018'},
    //                 {label: '2017'},
    //                {label: '2016'} ];

    const handleSelect = (e) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value)

        setSelectedValue2(e.target.value);
        console.log(e.target.value)

        setSelectedValue3(e.target.value);
        console.log(e.target.value)

        e.preventDefault();

        axios.get('http://localhost:8000/AddMovie')
        .then((response2) => {
            setDropResult(response2.data);
           
            console.log(dropresults)
        })
        .catch((error) => {
            console.error('Error searching: ', error)
        });

      };

      

    return(
        <div className='search-page'>
            {/* search container bar */}
            <div className='search-container'>
                <div className='search-bar'>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="search"
                    />
                    <button type="submit">🔍</button>
                </form>
                </div>
                <form onSubmit={handleSelect}>
                    {/* Dropdown */}
                    <select value={selectedValue} onChange={handleSelect} className='dropdown'>
                        <option value="">Watch</option>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Dropdown 2*/}
                    <select value={selectedValue2} onChange={handleSelect} className='dropdown'>
                        <option value="">Category</option>
                        {options2.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* Dropdown 3*/}
                    <select value={selectedValue3} onChange={handleSelect} className='dropdown'>
                        <option value="">Year</option>
                        {options3.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </form>
            </div>

            {/* search results */}

            {Array.isArray(dropresults) && dropresults.length > 0 ? (
                dropresults.map((item) => {
                    if (item.wstatus === selectedValue || item.category === selectedValue2 || item.year === selectedValue3) {
                    return (
                        <React.Fragment key={item.id}>
                            <div className='search-movie-palet'>
                                <div className='search-top-side'>
                                    <div>{item.name}</div>
                                    <div>{item.year}</div>
                                </div>
                                <div className='search-middle-side'>
                                    <div className='search-poster'>
                                    <img src={item.poster} alt={item.name} />
                                    </div>
                                    <div className='search-description'>
                                        <div>{item.category}</div>
                                        <div>{item.production}</div>
                                        <div>{item.description}</div>
                                        <div>{item.myrank}</div>
                                    </div>
                                </div>
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

{Array.isArray(results) && results.length > 0 ? (
          results.map((item) => {
            if (item.name === query) {
              return (
                <React.Fragment key={item.id}>
                  <div className='search-movie-palet'>
                      <div className='search-top-side'>
                        <div>{item.name}</div>
                        <div>{item.year}</div>
                      </div>
                        <div className='search-middle-side'>
                          <div className='search-poster'>
                            <img src={item.poster} alt={item.name} />
                          </div>
                          <div className='search-description'>
                            <div>{item.category}</div>
                              <div>{item.production}</div>
                              <div>{item.description}</div>
                              <div>{item.myrank}</div>
                          </div>
                        </div>
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

}export default SearchPage;