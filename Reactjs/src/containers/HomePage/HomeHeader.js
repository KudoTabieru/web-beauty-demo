import logo from "../../assets/logo_ma_beauty.png";

import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss"; // Đảm bảo file SCSS được liên kết

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false, // Trạng thái mở/đóng menu trên mobile
    };
  }

  toggleMobileMenu = () => {
    // Đổi trạng thái mở/đóng menu
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  closeMobileMenu = () => {
    // Đóng menu khi người dùng chọn mục
    this.setState({ isMobileMenuOpen: false });
  };

  render() {
    const { isMobileMenuOpen } = this.state; // Lấy trạng thái từ state
    // Lấy trạng thái từ state

    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="navbar">
            <a href="/" className="logo">
              <img src={logo} alt="Company Logo" />
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={this.toggleMobileMenu}
            >
              ☰
            </button>

            {/* Navigation menu */}
            <ul
              className={`nav-links ${
                isMobileMenuOpen ? "mobile-menu-open" : ""
              }`}
            >
              <li>
                <a href="/home" onClick={this.closeMobileMenu}>
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="/about" onClick={this.closeMobileMenu}>
                  Giới Thiệu
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropbtn" onClick={this.closeMobileMenu}>
                  Dịch vụ
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#" onClick={this.closeMobileMenu}>
                      Phun xăm chân mày
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={this.closeMobileMenu}>
                      Phun xăm môi
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={this.closeMobileMenu}>
                      Tiêm Filler
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/blog" onClick={this.closeMobileMenu}>
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/contact" onClick={this.closeMobileMenu}>
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="/booking" className="btn-b">
                  <button
                    className="btn-booking"
                    onClick={this.closeMobileMenu}
                  >
                    Booking now
                  </button>
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

export default connect(mapStateToProps)(HomeHeader);
