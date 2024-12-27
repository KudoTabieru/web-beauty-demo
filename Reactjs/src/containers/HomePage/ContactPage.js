import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Contact from "./Section/Contact";
import HomeFooter from "./HomeFooter";
import FooterMap from "./Section/FooterMap";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Contact />
        <FooterMap />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
