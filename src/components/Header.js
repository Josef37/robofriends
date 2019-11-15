import React, { PureComponent, Fragment } from "react";
import CounterButton from "./CounterButton";

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton />
      </Fragment>
    );
  }
}

export default Header;
