import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="footer-content">
          <div className="footer-commit">
            <div className="footer-logo"> </div>
            <div className="header-footer-commit"> VIỆN THẨM MỸ MẠ BEAUTY</div>
            <div className="commit-details">
              <p>Mạ Beauty - Ươm mầm sắc đẹp </p>
              <p>
                Cam kết mang lại trải nghiệm chăm sóc da tận tâm, giúp bạn tìm
                lại sự tự tin với làn da khỏe mạnh và rạng rỡ.
              </p>
            </div>
          </div>

          <div className="footer-infor">
            <div className="header-infor"> THÔNG TIN LIÊN HỆ</div>
            <div className="infor-details">
              <div>
                <i className="fa-solid fa-location-dot"> </i>
                Cơ sở: 169 Đặng Văn Ngữ, phường 13, quận Phú Nhuận, Thành phố Hồ
                Chí Minh
              </div>
              <div>
                <i className="fa-solid fa-phone-volume"></i>
                Hotline: 093 157 25 73
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                Email: support@mabeautyclinic.com
              </div>
              <div>
                <i className="fa-solid fa-clock"></i>
                Giờ làm việc: 9h00 đến 19h00
              </div>
              <div> Theo dõi chúng tôi tại:</div>
              <a
                href="https://www.facebook.com/mabeautypremium"
                className="fa-brands fa-facebook"
              ></a>
            </div>
          </div>

          <div className="footer-service">
            <div className="header-service"> DỊCH VỤ NỔI BẬT</div>
            <div className="service-details">
              <div>Trị mụn</div>
              <div>Trẻ hóa da</div>
              <div>Peel da</div>
              <div>Chăm sóc da</div>
              <div>Phun xăm</div>
              <div>Triệt lông</div>
              <div>Tạo hình gương mặt</div>
              <div>Dịch vụ đặc biệt</div>
            </div>
          </div>
          <div className="footer-sup">
            <div className="header-sup">HỖ TRỢ</div>
            <div className="sup-details">
              <div>Chính Sách Bảo Mật</div>
              <div>Sự kiện</div>
              <div>Thiện nguyện</div>
              <div>Truyền thông</div>
            </div>
          </div>
        </div>
        <p className="copy-right">
          &copy; 2024 - Viện thẩm mỹ Mạ Beauty - All Right Reserved
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
