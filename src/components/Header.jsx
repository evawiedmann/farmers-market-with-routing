import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmers Market</h1>
      <Link to="/">Home</Link> | <Link to="/newmarketschedule">Create Market Schedule</Link>
    </div>
  );
}

export default Header;
