import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return searchField
        .toLowerCase()
        .split(" ")
        .every(subString => robot.name.toLowerCase().includes(subString));
    });
  };

  render() {
    const { isPending, onSearchChange } = this.props;

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
