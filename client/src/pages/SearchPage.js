import axios from 'axios';
import React, { useState } from 'react'

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
                 <select value={selectedValue} onChange={handleSelect}>
                    <option value="">Watch</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>

                {/* Dropdown 2*/}
                <select value={selectedValue2} onChange={handleSelect}>
                    <option value="">Category</option>
                    {options2.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>

                {/* Dropdown 3*/}
                <select value={selectedValue3} onChange={handleSelect}>
                    <option value="">Year</option>
                    {options3.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </form>
            </div>

            {Array.isArray(dropresults) && dropresults.length > 0 ? (
                dropresults.map((item) => {
                    if (item.wstatus === selectedValue || item.category === selectedValue2 || item.year === selectedValue3) {
                    return (
                        <React.Fragment key={item.id}>
                            <div className='movie-palet'>
                                <div className='top-side'>
                                    <div>{item.name}</div>
                                    <div>{item.year}</div>
                                </div>
                                <div className='middle-side'>
                                    <div className='poster'>
                                    <img src={item.poster} alt={item.name} />
                                    </div>
                                    <div className='description'>
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