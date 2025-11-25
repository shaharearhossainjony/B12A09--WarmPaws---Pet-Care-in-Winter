import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;