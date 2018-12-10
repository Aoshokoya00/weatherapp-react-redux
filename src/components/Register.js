import React, { Component } from "react";
import FormErrors from "./FormErrors";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      blankfield: false,
      passwordmatch: false
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
        blankfield: false,
        passwordmatch: false
      }
    });

    if (firstname === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("firstname").classList.add("invalid");
      return;
    }
    if (lastname === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("lastname").classList.add("invalid");
      return;
    }
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
    if (confirmpassword === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("confirmpassword").classList.add("invalid");
      return;
    }
    if (password !== confirmpassword) {
      this.setState({
        errors: {
          ...this.state.errors,
          passwordmatch: true
        }
      });
      document.getElementById("password").classList.add("invalid");
      document.getElementById("confirmpassword").classList.add("invalid");
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
        <h2>Register</h2>
        <FormErrors registrationerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              aria-describedby="firstNameHelp"
              placeholder="Enter first name"
              value={this.state.firstname}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              type="lastname"
              className="form-control"
              id="lastname"
              aria-describedby="lastNameHelp"
              placeholder="Enter last name"
              value={this.state.lastname}
              onChange={this.onInputChange}
            />
          </div>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordconfirm">Confirm password</label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Confirm password"
              value={this.state.confirmpassword}
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
