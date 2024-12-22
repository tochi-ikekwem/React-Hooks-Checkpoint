// src/App.js  
import React, { useState } from 'react';  
import MovieList from './components/MovieList';  
import Filter from './components/Filter';  
import './App.css';  

const App = () => {  
  const [movies, setMovies] = useState([  
    {  
      title: 'Inception',  
      description: 'A mind-bending thriller about dreams within dreams.',  
      posterURL: 'https://via.placeholder.com/150',  
      rating: 9,  
    },  
    {  
      title: 'The Matrix',  
      description: 'A computer hacker learns about the true nature of reality.',  
      posterURL: 'https://via.placeholder.com/150',  
      rating: 8.7,  
    },  
  ]);  

  const [titleFilter, setTitleFilter] = useState('');  
  const [ratingFilter, setRatingFilter] = useState('');  

  const [newMovie, setNewMovie] = useState({  
    title: '',  
    description: '',  
    posterURL: '',  
    rating: '',  
  });  

  const addMovie = () => {  
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {  
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);  
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });  
    }  
  };  

  const filteredMovies = movies.filter((movie) => {  
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());  
    const ratingMatch = movie.rating >= (ratingFilter ? Number(ratingFilter) : 0);  
    return titleMatch && ratingMatch;  
  });  

  return (  
    <div className="App">  
      <h1>Movie App</h1>  
      <Filter  
        titleFilter={titleFilter}  
        setTitleFilter={setTitleFilter}  
        ratingFilter={ratingFilter}  
        setRatingFilter={setRatingFilter}  
      />  
      <div className="new-movie-form">  
        <input  
          type="text"  
          placeholder="Title"  
          value={newMovie.title}  
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}  
        />  
        <input  
          type="text"  
          placeholder="Description"  
          value={newMovie.description}  
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}  
        />  
        <input  
          type="text"  
          placeholder="Poster URL"  
          value={newMovie.posterURL}  
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}  
        />  
        <input  
          type="number"  
          placeholder="Rating"  
          value={newMovie.rating}  
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}  
        />  
        <button onClick={addMovie}>Add Movie</button>  
      </div>  
      <MovieList movies={filteredMovies} />  
    </div>  
  );  
};  

export default App;