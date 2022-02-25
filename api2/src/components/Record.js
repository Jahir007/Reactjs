import React from 'react';

import classes from './Movie.module.css';

const Record = (props) => {
  return (
    // <li className={classes.movie}>
    //   <h2>{props.title}</h2>
    //   <h3>{props.releaseDate}</h3>
    //   <p>{props.openingText}</p>
    // </li>

  
  <table >
  <tr>
    <th>Name</th>
    <th>Model</th>
    <th>Passengers</th>
  </tr>

  <tr>
    <td>{props.title}</td>
    <td>{props.releaseDate}</td>
    <td>{props.openingText}</td>
  </tr>

  </table>

  );
};

export default Record;
