import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen text-white bg-gray-950 ">
      <header>
        <Header />
      </header>
      <main className="px-5 py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
