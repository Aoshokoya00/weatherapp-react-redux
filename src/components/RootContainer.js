import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import {
  logIn,
  setUserName,
  loadingCurrentSession
} from "../actions/authActions";
import Header from "./Header";
import Register from "./Register";
import LogIn from "./LogIn";
import Account from "./Account";
import ChangePassword from "./ChangePassword";
import WeatherContainer from "./WeatherContainer";

class RootContainer extends Component {
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.props.logIn();
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });
        this.props.setUserName(user.username);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
    this.props.loadingCurrentSession();
  }
  render() {
    return (
      !this.props.isSessionLoading && (
        <div className="App">
          <Header title="weather app" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={WeatherContainer} />
              <Route exact path="/weather" component={WeatherContainer} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/changepassword" component={ChangePassword} />
            </Switch>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  loadingCurrentSession: state.auth.isSessionLoading
});

export default withRouter(
  connect(
    mapStateToProps,
    { logIn, setUserName, loadingCurrentSession }
  )(RootContainer)
);
