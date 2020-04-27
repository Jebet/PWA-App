import React, { Component } from "react";
import styled from "styled-components";
import { CardWrapper } from "./Shared/card/card";
import CardContent from "../src/cardcontent/cardcontent";
import data from "./data/data.json";
import logo from "./Images/groot.jpg";

const ProfileImage = styled.img`
  width: 300px;
  height: 350px;
  background-image: url("http://i.stack.imgur.com/2OrtT.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheros: data.superheros,
      superhero: data.superhero,
    };
  }
  render() {
    const { superhero, superheros } = this.state;
    return (
      <div>
        <CardWrapper>
          <section>
            <ProfileImage
              src={logo}
              className='ProfileImage'
              alt='logo'
            ></ProfileImage>
          </section>
          {superheros.map((superhero, i) => (
            <CardContent key={i} superhero={superhero} />
          ))}
        </CardWrapper>
      </div>
    );
  }
}

export default App;
