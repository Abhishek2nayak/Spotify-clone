import React from 'react'
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
    return (
        <>
        <nav className ="sidebar">
            <NavLink to={"."} className="nav-links">Home</NavLink>
            <NavLink to={"search"} className="nav-links">Search</NavLink>
            <NavLink to={"album"}  className="nav-links">Album</NavLink>
            <NavLink to={"artist"}  className="nav-links">Artist</NavLink>
            <NavLink to={"playlist"}  className="nav-links">Playlist</NavLink>
            <NavLink to={"setting"} className="nav-links">Setting</NavLink>
        </nav>
        
        </>
    )
}


export default Sidebar;