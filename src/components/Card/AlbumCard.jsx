import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss'
const AlbumCard = ({src,title,id,description}) => {
  return (
    <div className='card album-card'>
      <Link to={`/album/${id}`}>
      <img src={src} alt={title} />
      <h3 className='compress'>{title}</h3>
      <p className='compress'>{description}</p>
      <button className='play-btn'><i class="ri-play-fill"></i></button>
      </Link>
    </div>
  );
}

export default AlbumCard;
