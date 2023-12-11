import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <span>logo</span>
      <div className='nav-links'>
        <NavLink className={'link'} to={'.'}>Home</NavLink>
        <NavLink className={'link'} to={'/album'}>Albums</NavLink>
        <NavLink className={'link'} to={'/artist'}>Artist</NavLink>
        <NavLink className={'link'} to={'/search'}>Search</NavLink>
        <NavLink className={'link'} to={'/playlist'}>Playlist</NavLink>
        
      </div>
    </div>
  );
}

export default Navbar;
