import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./dashboard";

it("renders the title ", () => {
  const wrapper = (props = {}) => {
    const component = shallow(<Header {...props} />);
    console.log(component.debug());
    return component;
  };
});
