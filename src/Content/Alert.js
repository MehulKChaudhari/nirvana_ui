import React from "react";
import "../Styles/Styles.css";
const Alert = () => {
  return (
    <div className="">
      <h1 className="text-white">Alerts</h1>\
      <p></p>
      <div class="alert-container">
        <div class="alert alert-success" role="alert">
          <i class="fa fa-check-circle fa-2x"> </i>
          <span> Success Alert </span>
        </div>
        <div class="alert alert-danger" role="alert">
          <i class="fa fa-exclamation-triangle fa-2x"> </i>
          <span> Danger Alert </span>
        </div>
        <div class="alert alert-warning" role="alert">
          <i class="fa fa-exclamation-circle fa-2x"> </i>
          <span> Warning Alert </span>
        </div>
        <div class="alert alert-info" role="alert">
          <i class="fa fa-info fa-2x"> </i>
          <span> Information Alert </span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
