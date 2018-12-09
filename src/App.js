import React, { Component } from "react";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="weather app" />
          <WeatherContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
