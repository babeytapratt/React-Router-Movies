import React, {useState} from 'react';
import axios from 'axios';

function SearchBar() {
    const [title, setTitle] =useState('')
    const onSubmitHandler = e => {
        e.preventDefault()
        axios.get(`http://localhost:5000/api/movies/search/${title}`)
        .then((res) => setImmediate(res.data.id))
        .catch(err => console.log(err))

    }
    return (
        <form onSubmit={e => onSubmitHandler(e)} className="search-bar">
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="title of movie"/>
                <button type="submit" disabled={!title}>Search</button>
        </form>
    )
}

export default SearchBar;
