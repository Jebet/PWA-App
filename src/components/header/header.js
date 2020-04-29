import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import "./header.css";

const Header = () => {
  return (
    <div width={`80%`} height={`auto`} margin={`20px auto`} background={`#eee`}>
      <div>
        <h1
          css={css`
            color: #3ea99f;
          `}
          className='title'
        >
          Welcome to Heros Dashboard
        </h1>
      </div>
    </div>
  );
};
Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
