import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 items-center bg-orange-50 shadow-md p-4 w-full ">
      <div className="flex flex-col md:flex-row  items-center md:items-start">
  <img src="/rocking-chair.gif" alt="Loading animation" className="w-[40px] hover:text-orange-700" />
  <h1 className="text-2xl font-bold font-serif mt-2 hover:text-orange-700">Furniro</h1>
</div>

      {/* Column 2: Navigation Links */}
      <div className="flex justify-center gap-6 mt-4 md:mt-0">
        <Link to="/" className="hover:underline hover:text-orange-700">Home</Link>
        <Link to="/products" className="hover:underline hover:text-orange-700">Products</Link>
        <Link to="/aboutus" className="hover:underline hover:text-orange-700">AboutUs</Link>
        <Link to="/contact" className="hover:underline hover:text-orange-700">Contact</Link>
      </div>

      {/* Column 3: Cart & Profile Dropdown */}
      <div className="flex justify-center md:justify-center gap-6 relative mt-4 md:mt-0 items-center">
        {/* Cart Icon */}
        <Link to="/cart" className="text-xl hover:text-orange-700">
          <i className="fa-solid fa-cart-shopping text-xl "></i>
        </Link>

        {/* Profile Dropdown */}
        <div
          className="relative"
          onMouseOver={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <i className="fa-solid fa-user text-xl cursor-pointer hover:text-orange-700"></i>
          <div
            ref={dropdownRef}
            className={`absolute top-[15px] mt-2 ${
              showMenu ? 'flex' : 'hidden'
            } flex-col bg-white w-[200px] p-2 shadow-md rounded  z-50`}
          >
            <Link className="hover:bg-orange-50 px-2 py-1 rounded" to="/register">Register</Link>
            <Link className="hover:bg-orange-50 px-2 py-1 rounded" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
