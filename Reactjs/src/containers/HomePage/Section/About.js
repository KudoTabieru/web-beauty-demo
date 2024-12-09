import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-container">
          <div className="about-content">
            <div className="left-content">
              <div className="about-us-left">ABOUT US</div>
              <div className="welcome-left">WELCOME TO LA SPA</div>
              <div className="details-left">
                Nearly 10 years of operation is such a long way, starting from a
                small spa in the hotel to nowadays becoming spa chain with many
                branches and bringing the pioneer mission to take the spa
                industry in Vietnam to keep up with the standards of the world.
              </div>
              <div className="details-left">
                La Spa is ready to surprise you with meticulous care from the
                smallest details, absolute cleanliness and unexpected service.
              </div>
              <div className="details-left">
                What makes us proud is not just the increase in the number of
                customers, the reputation, the revenue and the more perfection
                of the process and quality service, but the staﬀ deep attachment
                and enthusiasm.
              </div>
            </div>
            <div className="right-content">
              <div className="img-right"></div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
