import React, { useState } from 'react';



const SearchBar = () => {
    const [input, setInput] = useState('')
    //handle change with input
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    //handle once search button is pressed. Will use the api
    const search = () => {

    }
    return (
        <section className='SearchBar'>
            <input placeholder='Enter a Song Title' value={input} onChange={handleChange} />
            <button className='SearchButton' onClick={search}>SEARCH</button>
        </section>
    )
};

export default SearchBar;