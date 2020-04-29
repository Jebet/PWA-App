import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = (props) => {
  return (
    <>
      <div className='header'>
        <h3>{props.title}</h3>
      </div>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
