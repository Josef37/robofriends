import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("MainPage smart component", () => {
  const mockInitialProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<MainPage {...mockInitialProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders loading", () => {
    const mockProps = { ...mockInitialProps, isPending: true };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockProps = {
      ...mockInitialProps,
      robots: [
        { id: 1, name: "Robot" },
        { id: 5, name: "not" }
      ],
      searchField: "bo"
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([
      { id: 1, name: "Robot" }
    ]);
  });

  it("filters case insensitive", () => {
    const mockProps = {
      ...mockInitialProps,
      robots: [
        { id: 1, name: "Robot" },
        { id: 5, name: "Bot" }
      ],
      searchField: "boT"
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual(mockProps.robots);
  });

  it("filters every word", () => {
    const mockProps = {
      ...mockInitialProps,
      robots: [
        { id: 1, name: "Hello Bot" },
        { id: 5, name: "Hell Bot" }
      ],
      searchField: "hello ll ot"
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([
      { id: 1, name: "Hello Bot" }
    ]);
  });
});
