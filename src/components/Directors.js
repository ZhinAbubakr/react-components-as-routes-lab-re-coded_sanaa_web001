import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>

      {directors.map((director, index) =>
        <div key={director.name}>
          <br></br>
          <h3>Name: {director.name}</h3>
          <p>Movies: </p><ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
        </div>
        ) }
    </div>
  );
}

export default Directors
