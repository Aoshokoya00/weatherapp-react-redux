import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";

class ForgotPasswordVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationcode: "",
      email: "",
      newpassword: "",
      errors: {
        cognito: null,
        blankfield: false
      }
    };
  }

  validateForm = event => {
    const { verificationcode, email, newpassword } = this.state;

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

    if (verificationcode === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("verificationcode").classList.add("invalid");
      return;
    }
    if (email === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("email").classList.add("invalid");
      return;
    }
    if (newpassword === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("newpassword").classList.add("invalid");
      return;
    }
    return;
  };

  passwordVerificationHandler = async event => {
    event.preventDefault();
    this.validateForm(event);
    try {
      const data = await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationcode,
        this.state.newpassword
      );
      console.log(data);
      this.props.history.push("/changepasswordconfirmation");
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
        <p>Request succeeded!</p>
        <p>
          Please enter the verification code sent to your email address below,
          your email address and a new password.
        </p>
        <FormErrors formerrors={this.state.errors} />
        <form
          className="col-6 mt-4"
          onSubmit={this.passwordVerificationHandler}
        >
          <div className="form-group">
            <label htmlFor="verificationcode">Verification code</label>
            <input
              type="text"
              className="form-control"
              id="verificationcode"
              aria-describedby="verificationCodeHelp"
              placeholder="Enter verification code"
              value={this.state.verificationcode}
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
            <label htmlFor="newpassword">New password</label>
            <input
              type="password"
              className="form-control"
              id="newpassword"
              placeholder="New password"
              value={this.state.newpassword}
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

export default ForgotPasswordVerification;
