import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./modal.css";

const Button = styled.button`
  border: 0;
  background: #78f89f;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1;
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
      <Container>
        <ModalTitle>{this.props.title}Title</ModalTitle>
        <ModalContent>{this.props.children}</ModalContent>
        <ButtonDiv>
          <Button onClick={this.onClose}>close</Button>
        </ButtonDiv>
      </Container>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Modal;
