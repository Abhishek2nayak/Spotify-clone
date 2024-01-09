import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../components/Card/AlbumCard";
import Header from "../components/Header";
import ArtistCard from "../components/Card/ArtistCard";
import { sortString, getCompressedName } from "../utils/UtilFunctions";




import { config } from "../utils/Constant";
import AlbumList from "../components/container/AlbumList";
import ArtistList from "../components/container/ArtistList";
import { HomeBanner } from "../components/HomeBanner";
const Home = () => {
  const [albums, setAlbums] = useState(null);
  const [artist, setArtist] = useState(null);

  // const [playList, setPlayList] = useState(null);
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

  return (
    <>
      <HomeBanner/>
      {/* albums  */}
      <div className="demo-song-section">
        <Header title={"New Release"} />
        <AlbumList albums={albums} />
        
      </div>

      {/* artist  */}
      <div className="demo-song-section">
        <Header title={"Artist"} />
        <ArtistList artist={artist} />
      </div>
    </>
  );
};

export default Home;
