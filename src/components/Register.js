import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";

class Register extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  };

  validateForm = event => {
    const {
      username,
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
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });

    if (username === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("username").classList.add("invalid");
      return;
    }
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

  handleClick = async event => {
    event.preventDefault();
    this.validateForm(event);

    const { username, firstname, lastname, email, password } = this.state;

    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          given_name: firstname,
          family_name: lastname
        },
        validationData: [] //optional
      });
      console.log(signUpResponse);
    } catch (error) {
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: error
        }
      });
    }
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
        <FormErrors formerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.handleClick}>
          <div className="form-group row">
            <div className="col">
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
            <div className="col">
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
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="userNameHelp"
              placeholder="Enter username"
              value={this.state.username}
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
          <div className="form-group row">
            <div className="col">
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
            <div className="col">
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
