import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../components/Card/AlbumCard";
import Header from "../components/Header";
import ArtistCard from "../components/Card/ArtistCard";
const Home = () => {
  const [albums, setAlbums] = useState(null);
  const [artist, setArtist] = useState(null);
  const [playList, setPlayList] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  useEffect(() => {
    //get newly release albums
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", config)
      .then((res) => res.data)
      .then((data) => setAlbums(data.albums.items.slice(0, 10)))
      .catch((error) => {
        throw new Error(error);
      });
      axios
      .get("https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6", config)
      .then((res) => res.data)
      .then((data) => setArtist(data.artists))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  console.log(artist);

  function sortString(str) {
    return str.length >= 15 ? str.substring(0, 15) + ".." : str;
  }
  function getCompressedName(artists) {
    let names = artists.map((artist) => artist.name + " ,").toString();
    names = names.substring(0, names.length - 1);
    return names.length >= 15 ? names.substring(0, 15) + ".." : names;
  }
  const latestAlbumElements = albums?.map((album) => (
    <AlbumCard
      src={album.images[1].url}
      title={sortString(album.name)}
      id={album.id}
      description={getCompressedName(album.artists)}
    />
  ));
  const artistElement = artist?.map((artist) => (
    <ArtistCard
      src={artist.images[1].url}
      title={sortString(artist.name)}
      id={artist.id}
      description={artist.type}
    />
  ));
  

  return (
    <>
      <Header title={"New Release"}/>
      <div className="card-container">
        {latestAlbumElements}
        </div>
      <Header title={"Artist"}/>
      <div className="card-container">
      {artistElement}
        </div>
        
    </>
  );
};

export default Home;
