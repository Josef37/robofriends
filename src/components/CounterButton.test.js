import React from "react";
import { shallow, mount } from "enzyme";
import CouterButton from "./CounterButton";

test("renders component for the first time right", () => {
  const wrapper = shallow(<CouterButton />);
  expect(wrapper.debug()).toMatchSnapshot();
});

test("counts after clicking the counter", () => {
  const wrapper = mount(<CouterButton />);
  const button = wrapper.find("button");
  button.simulate("click");
  expect(wrapper.debug()).toMatchSnapshot();
});
