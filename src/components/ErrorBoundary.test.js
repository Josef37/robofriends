import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary component", () => {
  it("renders nothing without error", () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders error message when error occurs", () => {
    const wrapper = shallow(<ErrorBoundary />);
    wrapper.instance().componentDidCatch();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
