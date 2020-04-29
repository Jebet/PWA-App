import React from "react";
import { GrUserFemale } from "react-icons/gr";
import { RiShieldUserLine } from "react-icons/ri";
import { RiBriefcase2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconBar = styled.div`
  position: fixed;
  height: auto;
  width: 300px;
  justify-content: space-evenly;
  color: black;
  text-align: center;
  display: flex;
  padding: 0;
`;

const Font = styled.label`
  font-size: 12px;
  font-family: sans-serif; roboto;
margin: 1px
`;

const cardcontent = (superhero) => {
  const { name, image } = superhero;
  console.log(superhero);
  return (
    <div className='details'>
      <img src={image} alt='' />
      <div className='name'>{name}</div>
      <>
        <IconBar>
          <div className='icon-bed'>
            <FaRegLightbulb />
            <Font>Bio</Font>
          </div>
          <div className='icon-bed'>
            <GrUserFemale />
            <Font>Appearance</Font>
          </div>
          <div className='icon-bed'>
            <RiShieldUserLine />
            <Font>Power</Font>
          </div>
          <div className='icon-bed'>
            <RiBriefcase2Line />
            <Font>Work</Font>
          </div>
          <div className='icon-bed'>
            <FaUserFriends />
            <Font>Connections</Font>
          </div>
        </IconBar>
      </>
    </div>
  );
};

cardcontent.propTypes = {
  superhero: PropTypes.object.isRequired,
};

export default cardcontent;
