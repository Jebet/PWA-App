import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='nav' style={{ backgroundColor: "red", height: "50px" }}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/details'>Heros</NavLink>
    </div>
  );
};

export default Navigation;
