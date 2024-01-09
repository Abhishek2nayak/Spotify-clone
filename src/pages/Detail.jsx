import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { generateRandomColor, getBannerColorStyle, millisToMinutesAndSeconds} from "../utils/UtilFunctions";
import { config } from "../utils/Constant";


const Detail = () => {  
  const id = useParams().id;
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //get newly release albums
    setLoading(true);
    axios
      .get(`https://api.spotify.com/v1/albums/${id}`, config)
      .then((res) => res.data)
      .then((data) => setAlbums(data))
      .catch((error) => {
        throw new Error(error);
      });
    setLoading(false);
  }, [id]);

  if (loading) {
    alert(loading);
    return <h1>Loading</h1>;
  }
  console.log(albums);
  const color = generateRandomColor();


  
  const element = albums ? (
    <div style={getBannerColorStyle(color)}>
      {/* top  */}
      <div className="banner">
        <img src={albums.images[0].url} alt="" />
        <div>
          <p>{albums.album_type}</p>
          <h1>{albums.name}</h1>
          <p>{albums.artists[0].name}</p>
        </div>
      </div>
    </div>
  ) : (
    "No data found"
  );

  console.log(albums);

  const tracks = albums
    ? albums.tracks.items.map((track) => (
    <tr className='song-card' key={track.id}>
      <td>
        <span>1</span>
        <img src={track.images} alt="" />
        {/* {console.log(track.images)} */}
        <div>
          <span>{track.name}</span>
          <span>{track.type}</span>
        </div>
      </td>
      <td>Album</td>
      <td>time added</td>
      <td>
        {/* <span>heart</span>
        <span>time</span> */}
        <span>{millisToMinutesAndSeconds(track.duration_ms)}</span>
      </td>
    </tr>
      ))
    : "No track found";

  return (
    <>
    <div>
      {element}
    </div>
    <div>
      <table className="song-list">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Date added</th>
          <th>Duration</th>
        </tr>
        {tracks}
      </table>
    </div> 
    </>
  );
};

export default Detail;
