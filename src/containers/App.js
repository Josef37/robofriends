import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: undefined,
      searchString: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(err => console.log(err));
  }

  onSearchChange = event => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    if (!this.state.robots) {
      return <h1 className="tc f1">Loading</h1>;
    }

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
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
