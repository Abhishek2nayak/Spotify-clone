import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='wrapper'>
      <Navbar/>
      <div className='container'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
