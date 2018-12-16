import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {
        cognito: null,
        blankfield: false
      }
    };
  }

  validateForm = event => {
    const { email } = this.state;

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
    return;
  };

  forgotPasswordHandler = async event => {
    event.preventDefault();
    this.validateForm(event);
    try {
      const data = await Auth.forgotPassword(this.state.email);
      console.log(data);
      // redirect to verification code input
      this.props.history.push("/forgotpasswordverification");
    } catch (error) {
      this.setState({
        errors: { ...this.state.errors, cognito: error }
      });
      console.log(error.message);
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
        <h2>Forgot your password?</h2>
        <p>
          Please enter the email address associated with your account and we'll
          email you a password reset link.
        </p>
        <FormErrors formerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.forgotPasswordHandler}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
