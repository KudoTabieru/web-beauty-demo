import React, { Component } from "react";
import { connect } from "react-redux";
import "./Booking.scss";
import { useState } from "react";

class Booking extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
