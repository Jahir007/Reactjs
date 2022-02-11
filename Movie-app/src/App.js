import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {

    setIsloading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/')
      
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Something went wrong')
        }
      
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsloading(false);
      } catch (error) {
        setError(error.message)
      }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 &&<MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No record found.</p>}
        {isLoading && <p>Loading........</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
