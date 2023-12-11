import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './layout/Layout';

import Album from './pages/Album';
import Artist from './pages/Artist';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import Home from './pages/Home';
import Detail from './pages/Detail';
const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element = {<Home/>}/>
                <Route path='album' element = {<Album/>}/>
                <Route path='album/:id' element = {<Detail/>}/>
                <Route path='artist' element = {<Artist/>}/>
                <Route path='playlist' element = {<Playlist/>}/>
                <Route path='search' element = {<Search/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
