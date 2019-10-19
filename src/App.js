import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchString: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return this.state.searchString
        .toLowerCase()
        .split(" ")
        .every(subString => robot.name.toLowerCase().includes(subString));
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
