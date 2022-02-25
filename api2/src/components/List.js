import React from 'react';

import Record from './Record';
import classes from './MoviesList.module.css';

const List = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.records.map((record) => (
        <Record
          // key={record.id}
          title={record.title}
          releaseDate={record.releaseDate}
          openingText={record.consumables}
        />
      ))}
    </ul>
  );
};


export default List;
