import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-black text-white">
      <span className="h-20 flex justify-start gap-8">
        <button className="px-9 bg-red-500">
          All Categories
        </button>
        <button onClick={() => { window.location.href = '/' }}>Home</button>
        <button>Shop</button>
        <button>Contact Us</button>
      </span>
      <button onClick={() => { window.location.href = '/login' }}>Login</button>
    </div>
  );
};

export default Navbar;
