import React, { useState } from 'react';

import RecordList from './components/RecordList';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  function fetchRecordHandler() {
    fetch('http://demos1.stral.in/PGCTechnologyServices/api/v1/course/catalog?_format=json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       // var recordData=data;
       // console.log(data.Results)
        const transformedRecords = data.Results.map((recordData) => {
          return {
            id: recordData.CourseID,
            title: recordData.AvailableSeats,
            // openingText: movieData.opening_crawl,
            releaseDate: recordData.RegistrationDeadline,
          };
        });
        setRecords(transformedRecords);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchRecordHandler}>Fetch Details</button>
      </section>
      <section>
        <RecordList records={records} />
      </section>
    </React.Fragment>
  );
}

export default App;
