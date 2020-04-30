import React from "react";
import "./navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='navbar'>
      <button className='nav-button'>
        <NavLink to='/'>Home</NavLink>
      </button>
      <button className='nav-button'>
        <NavLink to='/details'>Heros</NavLink>
      </button>
    </div>
  );
};

export default Navigation;
