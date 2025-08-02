import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './aside';
import Footer from '../component/footer';

export default function AdminLayout() {
  const [showAside, setShowAside] = useState(false);

  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      {/* Navbar */}
      <nav className='flex justify-between items-center bg-orange-50 p-4 shadow-md '>
        <h1 className='text-2xl font-bold font-serif'>Furniro</h1>
        <button
          className='md:hidden px-4 py-2 outline-1 hover:text-white hover:bg-orange-700 rounded'
          onClick={() => setShowAside(!showAside)}
        >
          ≡ Menu
        </button>
      </nav>

      {/* Content area: grid with aside + main */}
      <div className='grid grid-cols-1 md:grid-cols-[200px_1fr] flex-grow'>
        {/* Sidebar */}
        <Aside showAside={showAside} setShowAside={setShowAside}  />

        {/* Main content */}
        <main className='p-4'>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
