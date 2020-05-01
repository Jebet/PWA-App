import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./modal.css";

const Button = styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
}
`;

const ButtonDiv = styled.div`
  border-top: 1px solid #ccc;
  background: #eee;
  padding: 0.5rem 1rem;
`;

const ModalContent = styled.div`
  padding: 1rem;
  font-size: 12px;
  position: center;
`;
const ModalTitle = styled.h4`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  margin: 0;
`;

const Container = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  top: 200px;
  position: relative;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
`;
class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Overlay>
        <Container>
          <ModalTitle>{this.props.title}Superhero Stats</ModalTitle>
          <ModalContent>{this.props.children}</ModalContent>
          <ButtonDiv>
            <Button onClick={this.onClose}>close</Button>
          </ButtonDiv>
        </Container>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  // title: PropTypes.string.isRequired,
};

export default Modal;
