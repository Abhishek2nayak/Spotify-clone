import React from 'react';
import { NavLink } from 'react-router-dom';
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span><img src={spotifyLogo} alt="" /></span>
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
