import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      errors: {
        blankfield: false,
        passwordmatch: false
      }
    };
  }

  validateForm = event => {
    const { oldpassword, newpassword, confirmpassword } = this.state;

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

    if (oldpassword === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("oldpassword").classList.add("invalid");
      return;
    }
    if (newpassword === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("newpassword").classList.add("invalid");
      return;
    }
    if (confirmpassword === "") {
      this.setState({
        errors: { ...this.state.errors, blankfield: true }
      });
      document.getElementById("confirmpassword").classList.add("invalid");
      return;
    }
    if (newpassword !== confirmpassword) {
      this.setState({
        errors: {
          ...this.state.errors,
          passwordmatch: true
        }
      });
      document.getElementById("newpassword").classList.add("invalid");
      document.getElementById("confirmpassword").classList.add("invalid");
      return;
    }
    return;
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.validateForm(event);

    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      const changePasswordResponse = await Auth.changePassword(
        user,
        this.state.oldpassword,
        this.state.newpassword
      );
      console.log(changePasswordResponse);
    } catch (error) {
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
        <h2>Change Password</h2>
        <FormErrors formerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldpassword">Old password</label>
            <input
              type="password"
              className="form-control"
              id="oldpassword"
              placeholder="Old password"
              value={this.state.oldpassword}
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
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
