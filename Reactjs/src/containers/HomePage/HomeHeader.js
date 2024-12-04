import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <a
              className="facebook-icon"
              href="https://www.facebook.com/profile.php?id=61557469261204"
              target="_blank"
            >
              {/* <span className="elementor-screen-only"></span> */}
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a className="youtube-icon" href="#" target="_blank">
              {/* <span className="elementor-screen-only"></span> */}
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="center-content">
            <div className="header-logo"> </div>
          </div>

          <div className="right-content"></div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
