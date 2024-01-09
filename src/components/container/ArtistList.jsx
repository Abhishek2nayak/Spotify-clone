import React, { useEffect, useRef, useState } from 'react'
import ArtistCard from '../Card/ArtistCard';
import { handleResize, sortString } from '../../utils/UtilFunctions';



const ArtistList = ({artist}) => {
    const gridRef = useRef(null)
    const [visibleArtist, setVisibleArtist] = useState(artist?.length);
    useEffect(() => {
        setVisibleArtist(handleResize(gridRef));
        setVisibleArtist(handleResize(gridRef));
        window.addEventListener("resize", () => {
            setVisibleArtist(handleResize(gridRef))
        })
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [artist])

    const artistElement = artist?.slice(0,visibleArtist).map((artist) => (
        <ArtistCard
            src={artist.images[1].url}
            title={sortString(artist.name)}
            id={artist.id}
            description={artist.type}
        />
    ));

    return (
        <div className='card-container' ref={gridRef}>
            {artistElement}
        </div>
    )
}


export default ArtistList;