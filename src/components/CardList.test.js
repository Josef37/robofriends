import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

describe("CardList component", () => {
  it("renders empty robots correctly", () => {
    const wrapper = shallow(<CardList robots={[]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders robots correctly", () => {
    const wrapper = shallow(
      <CardList robots={[
        { id: 1, name: "Robot", email: "robot@mail.com" }, 
        { id: 3, name: "Bot Bot", email: "bot@bot.com" }
      ]} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
