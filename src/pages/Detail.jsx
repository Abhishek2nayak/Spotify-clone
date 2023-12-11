import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
const bg_color = [
  "#8A2BE2",
  "#C71585",
  "	#DC143C",
  "#FFA500",
  "#00FF00",
  "#20B2AA",
  "#BC8F8F",
  "#008080",
];

const Detail = () => {
  function generateRandomColor() {
    return bg_color[Math.floor(Math.random() * bg_color.length)];
  }
  const id = useParams().id;
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //get newly release albums
    setLoading(true)
    axios
      .get(`https://api.spotify.com/v1/albums/${id}`, config)
      .then((res) => res.data)
      .then((data) => setAlbums(data))
      .catch((error) => {
        throw new Error(error);
      });
      setLoading(false)
  }, [id]);
  
  if(loading) {
    alert(loading);
    return(
      <h1>Loading</h1>
    )
  }
  console.log(albums);

  const element =  albums ? <div style={{backgroundColor : generateRandomColor()}}>
  {/* top  */}
  <div className="banner">
    <img src={albums.images[0].url} alt="" />
    <div>
      <p>{albums.album_type}</p>
      <h1>{albums.name}</h1>
      <p>{albums.artists[0].name}</p>
    </div>
  </div>
</div> : "No data found";

  const tracks = albums ?  albums.tracks.items.map((track) => (
    <tr key={track.id}>
      <div>
        <h5>{track.name}</h5>
        <p>{track.type}</p>
      </div>
    </tr> 
  )) : "No track found";

 
  return (
  <>
  {element}
  {tracks}
  </>
    
   
  );
};

export default Detail;
