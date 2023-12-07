import React, { useState, useCallback } from 'react';
import './SearchBar.css';


const SearchBar = (props) => {
    const [input, setInput] = useState('')
    //handle change with input
    const handleChange = useCallback((event) => {
        setInput(event.target.value);
    }, [])
    //handle once search button is pressed. Will use the api
    const search = useCallback(() => {
        props.onSearch(input);
    },[props, input])
    return (
        <section className='SearchBar'>
            <input placeholder='Enter a Song Title' value={input} onChange={handleChange} />
            <button className='SearchButton' onClick={search}>SEARCH</button>
        </section>
    )
};

export default SearchBar;