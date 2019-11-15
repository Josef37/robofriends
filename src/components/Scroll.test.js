import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

describe("Scroll component", () => {
  it("renders correctly with children", () => {
    const wrapper = shallow(<Scroll><div /></Scroll>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("doesn't crash without children", () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
