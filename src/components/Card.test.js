import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

test("expect to render Card component", () => {
  const wrapper = shallow(<Card name="Name" email="name@mail.com" id="1234" />);
  expect(wrapper.debug()).toMatchSnapshot();
});
