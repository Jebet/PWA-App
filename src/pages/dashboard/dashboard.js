import React, { Component } from "react";
import Header from "../../components/header/header";

const props = {
  title: " Superhero Dashboard",
  height: "auto",
  width: "100%",
  color: "red",
};
class dashboard extends Component {
  render() {
    return (
      <div>
        <Header title={props.title} {...this.props} />
      </div>
    );
  }
}

export default dashboard;
