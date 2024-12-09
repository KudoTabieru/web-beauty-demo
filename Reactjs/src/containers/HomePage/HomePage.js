import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import About from "./Section/About";
import Services from "./Section/Services";
import Facilities from "./Section/Facilities";
import Newspaper from "./Section/Newspaper";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Specialty>
          <HomeHeader /> {/* Lồng HomeHeader vào Specialty */}
        </Specialty>
        <About />
        <Services />
        <Facilities />
        <Newspaper />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
