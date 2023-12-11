import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({title,path}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Link to="#" className='link'>see more </Link>
    </div>
  );
}

export default Header;
