import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SearchBox onSearchChange={jest.fn()} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("calls searchChange prop with event when searching", () => {
    const mockSearchChange = jest.fn();
    const wrapper = shallow(<SearchBox onSearchChange={mockSearchChange} />);
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    expect(mockSearchChange).toBeCalledWith({ target: { value: "foo" } });
  });
});
