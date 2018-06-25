import * as React from "react";
import "./App.scss";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TestPage from "./Pages/TestPage/TestPage";

const mapStateToProps = (state: any) => {
  return {
    actionResult: state.default
  };
};

class App extends React.PureComponent {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={TestPage} />
      </div>
    );
  }
}

export default withRouter((connect as any)(mapStateToProps)(App));
