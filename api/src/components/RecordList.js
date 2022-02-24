import React from 'react';

import Record from './Record';
import classes from './MoviesList.module.css';

const RecordList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.records.map((record) =>(movie) => (
        <Record
          title={record.title}
          releaseDate={record.releaseDate}
          // openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default RecordList;
