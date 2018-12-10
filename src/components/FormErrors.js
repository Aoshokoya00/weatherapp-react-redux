import React from "react";

function FormErrors(props) {
  if (
    props.registrationerrors &&
    (props.registrationerrors.blankfield ||
      props.registrationerrors.passwordmatch)
  ) {
    return (
      <div className="error container mt-2 invalid">
        <div className="row justify-content-center">
          {props.registrationerrors.passwordmatch
            ? "Password value does not match confirm password value"
            : ""}
        </div>
        <div className="row justify-content-center">
          {props.registrationerrors.blankfield ? "All fields are required" : ""}
        </div>
      </div>
    );
  } else if (props.searchvalidationerror) {
    return (
      <div className="error container mt-2 invalid">
        <div className="row justify-content-center">Enter a valid location</div>
      </div>
    );
  } else if (props.apierrors) {
    return (
      <div className="error container mt-2 invalid">
        <div className="row justify-content-center">{props.apierrors}</div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;
