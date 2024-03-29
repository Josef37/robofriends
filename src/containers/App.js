import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends React.Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
