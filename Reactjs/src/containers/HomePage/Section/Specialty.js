import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-header">{this.props.children}</div>
        <div className="specialty-content">
          <Slider {...settings}>
            <div className="img-customize">
              <div className="img-customize-1" />
            </div>
            <div className="img-customize">
              <div className="img-customize-2" />
            </div>
            <div className="img-customize">
              <div className="img-customize-3" />
            </div>
            <div className="img-customize">
              <div className="img-customize-4" />
            </div>
          </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
