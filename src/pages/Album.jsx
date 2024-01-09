import React from 'react';
import SongCard from '../components/Card/SongCard';
import SongTableHead from '../components/SongTableHead';


const Album = () => {
  return (
  <table className='song-table'>
    <SongTableHead/>
    <tbody>
      <SongCard/>
    </tbody>
  </table>
  );
}

export default Album;
