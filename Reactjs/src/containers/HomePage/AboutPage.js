import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Intro from "./Section/Intro";
import HomeFooter from "./HomeFooter";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Intro />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
