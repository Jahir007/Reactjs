import React, { useState, useEffect, useCallback } from 'react';

import List from './components/List';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecordsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedRecords = data.results.map((recordData) => {
        return {
          // id: movieData.episode_id,
          title: recordData.name,
          openingText: recordData.model,
          releaseDate: recordData.passengers,
        };
      });
      setRecords(transformedRecords);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRecordsHandler();
  }, [fetchRecordsHandler]);

  let content = <p>Found no movies.</p>;

  if (records.length > 0) {
    content = <List records={records} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchRecordsHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
