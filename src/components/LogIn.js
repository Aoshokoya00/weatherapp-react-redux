import React, { Component } from "react";
import FormErrors from "./FormErrors";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      blankfield: false
    }
  };

  validateForm = event => {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    } = this.state;

    // clear all error messages
    const inputs = document.getElementsByClassName("invalid");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("invalid");
      }
    }

    this.setState({
      errors: {
        blankfield: false
      }
    });

    if (email === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("email").classList.add("invalid");
      return;
    }
    if (password === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("password").classList.add("invalid");
      return;
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.validateForm(event);
    console.log("Call AWS Cognito api");
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("invalid");
  };

  render() {
    return (
      <div className="mt-5">
        <h2>Log in</h2>
        <FormErrors registrationerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange}
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