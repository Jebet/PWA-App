import React from "react";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import mockAxios from "jest";
import ReactDOM from "react-dom";
import Search from "./search";
import Modal from "../search/search";

// Enzyme.configure({ adapter: new Adapter() });

describe("it should render the search input", () => {
  it("render", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });

  it("shows text", () => {
    const wrapper = shallow(<Search fetchSearchResults={() => {}} />);
    let prevented = false;
    wrapper.find("input").simulate("change", {
      preventDefault: () => {
        prevented = true;
      },
      target: { value: "something" },
    });
    expect(wrapper.find("input").props().value).toEqual("something");
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
