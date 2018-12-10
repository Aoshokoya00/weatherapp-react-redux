import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import WeatherContainer from "./components/WeatherContainer";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="weather app" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={WeatherContainer} />
                <Route exact path="/weather" component={WeatherContainer} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={LogIn} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
