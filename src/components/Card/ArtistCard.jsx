import React from 'react';

const ArtistCard = ({title,src,desc,id}) => {
  return (
    <div className='card artist-card' key={id}>
       <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className='play-btn'><i class="ri-play-fill"></i></button>
    </div>
  );
}

export default ArtistCard;
