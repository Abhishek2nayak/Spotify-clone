import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import  './style.scss'
const Layout = () => {
  return (
  <div className='main-layout'>
    <Sidebar/>
    <div className='right-side-layout'>
      <main>
    <Outlet/>
    </main>
    </div>
  </div>
  );
}

export default Layout;
