import React from "react";
import {Link} from 'react-router-dom';

function Header(){
  return (
    <React.Fragment>
      <div className='header'>
        <h1>Help Queue</h1>
        <ul>
          <h5>
            <Link to='/'>Home</Link>
          </h5>
          <h5>
            <Link to='/signin'>Sign In</Link>
          </h5>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;