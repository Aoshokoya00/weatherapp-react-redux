import React, { Component } from "react";

class LogIn extends Component {
  render() {
    return (
      <div className="mt-5">
        <h2>Log in</h2>
        <form className="col-6 mt-4">
          <div className="form-group">
            <label htmlFor="emailnput">Email address</label>
            <input
              type="text"
              className="form-control"
              id="emailinput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
