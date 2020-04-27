import React, { Component } from "react";
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

const AppContainer = styled.div`
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
class App extends Component {
  state = {
    show: true,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
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
    );
  }
}

export default App;
