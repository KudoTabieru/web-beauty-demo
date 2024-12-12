import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Booking from "./Section/Booking";
import HomeFooter from "./HomeFooter";

class BookingPage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Booking />
        <HomeFooter />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
