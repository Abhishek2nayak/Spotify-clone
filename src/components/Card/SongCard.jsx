import React from 'react';

const SongCard = () => {
  return (
    <tr className='song-card'>
      <td>
        <span>1</span>
        <img src="https://images.unsplash.com/photo-1701221238491-d5247ff7abcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
        <div>
          <span>Song Name</span>
          <span>Artist</span>
        </div>
      </td>
      <td>Album</td>
      <td>time added</td>
      <td>
        <span>heart</span>
        <span>time</span>
      </td>
    </tr>
  );
}

export default SongCard;
