import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import Header from "./components/header/header";
=======
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
>>>>>>> feature/card
=======
import Modal from "./modal/modal";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  background: #cccccc;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1;
  position: absolute;
`;
>>>>>>> feature/modal

const AppContainer = styled.div`
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
class App extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      superheros: data.superheros,
      superhero: data.superhero,
    };
  }
=======
  state = {
    show: true,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
>>>>>>> feature/modal
  render() {
    const { superhero, superheros } = this.state;
    return (
<<<<<<< HEAD
      <div>
<<<<<<< HEAD
        <Header />

        <Search />
=======
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
>>>>>>> feature/card
      </div>
=======
      <AppContainer>
        <Button
          onClick={(e) => {
            this.showModal(e);
          }}
        >
          show Modal
        </Button>

        <Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
      </AppContainer>
>>>>>>> feature/modal
    );
  }
}

export default App;
