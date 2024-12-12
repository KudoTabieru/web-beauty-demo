import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  componentDidMount() {
    // Hiệu ứng thay đổi màu menu bar khi cuộn
    const header = document.querySelector(".home-header-container");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        navLinks.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        navLinks.classList.remove("scrolled");
      }
    });
  }

  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          {/* Menu bar cố định */}
          <div className="navbar">
            <ul className="nav-links">
              <li>
                <a href="/home">Trang Chủ</a>
              </li>
              <li>
                <a href="/about">Giới Thiệu</a>
              </li>

              <li className="dropdown">
                <a href="#" className="dropbtn">
                  Dịch vụ
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#">Phun xăm chân mày</a>
                  </li>
                  <li>
                    <a href="#">Phun xăm môi</a>
                  </li>
                  <li>
                    <a href="#">Tiêm Filler</a>
                  </li>
                  <li>
                    <a href="#">Tiêm Meso</a>
                  </li>
                  <li>
                    <a href="#">Tiêm Prohfilo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/tintuc">Tin tức</a>
              </li>

              <li>
                <a href="/contact">Liên hệ</a>
              </li>

              <li>
                <a href="/booking">
                  <button className="btn-booking">Booking now</button>
                </a>
              </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
