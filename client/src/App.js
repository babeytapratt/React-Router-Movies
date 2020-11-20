import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className="app">
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route path='/' exact>
        <SearchBar/>
        <MovieList/>
      </Route>
      <Route path="/movies/:id">
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
