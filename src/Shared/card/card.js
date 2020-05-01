import React from "react";
import styled from "styled-components";

const props = {
  width: "300px",
  height: "",
  margin: "",
};
const card = styled.div`
background: #ffffff,
borderRadius: 2px,
padding: 5px,
position: relative,
boxShadow: 1px 1px 3px rgba(0,0,0,0.12),
border: 1px solid #dedede,
fontFamily: Roboto', sans-serif,
width: props.width,
height: props.height,
margin: props.margin
`;

export default card;
