import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside({ showAside, setShowAside }) {
  return (
    <aside
      className={`md:block ${
        showAside ? 'block' : 'hidden'
      } md:translate-x-0 md:relative absolute z-50 md:top-0 left-0 h-full w-[200px] bg-black text-white  p-4 transition-transform duration-300`}
    >
      {/* <h2 className='text-xl font-bold mb-4'>Sidebar</h2> */}
      <ul className='flex flex-col gap-2'>
        <Link to='/admin'>Dashboard</Link>
        <Link to='addproduct'>Add Product</Link>
        <Link to='products'>Products</Link>
        <Link to='categories'>Category</Link>
        <Link to='orders'>Orders</Link>
        <Link to='users'>Users</Link>
      </ul>

      {/* Close button for small screen */}
      <button
        onClick={() => setShowAside(false)}
        className='mt-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-orange-600 md:hidden'
      >
        Close
      </button>
    </aside>
  );
}
