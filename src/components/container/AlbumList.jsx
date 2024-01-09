import React, { useEffect, useRef, useState } from "react";
import AlbumCard from "../Card/AlbumCard";
import { getCompressedName, handleResize, sortString } from "../../utils/UtilFunctions";


const AlbumList = ({ albums }) => {
    const gridRef = useRef(null);
    const [visibleAlbum, setVisibleAlbum] = useState(albums?.length);
    useEffect(() => {
        setVisibleAlbum(handleResize(gridRef));
        setVisibleAlbum(handleResize(gridRef));
        window.addEventListener("resize", () => {
            setVisibleAlbum(handleResize(gridRef))
        })
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [albums])
    const cardCustomStyle = gridRef.current;
    console.log(cardCustomStyle)


    const latestAlbumElements = albums?.slice(0, visibleAlbum).map((album) => (
        <AlbumCard
            src={album.images[1].url}
            title={sortString(album.name)}
            id={album.id}
            description={getCompressedName(album.artists)}
        />
    ));

    return (
        <div className="card-container" ref={gridRef} >
            {latestAlbumElements}
        </div>
    )
}


export default AlbumList;