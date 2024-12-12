import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="footer-content">
          <div className="footer-commit">
            <div className="footer-logo"> </div>
            <div className="header-footer-commit"> VIỆN THẨM MỸ LG CLINIC</div>
            <div className="commit-details ">
              LG Clinic cam kết cung cấp những phương pháp điều trị an toàn, tạo
              ra môi trường làm đẹp UY TÍN - TẬN TÂM - HIỆU QUẢ cho hàng triệu
              khách hàng.
            </div>
          </div>

          <div className="footer-infor">
            <div className="header-infor"> THÔNG TIN LIÊN HỆ</div>
            <div className="infor-details">
              <div>
                <i class="fa-solid fa-location-dot"> </i>
                Trụ sở chính: LG Clinic Luxury - 200 Lê Lai, P.Bến Thành, Quận
                1, TP.HCM
              </div>
              <div>
                <i class="fa-solid fa-phone-volume"></i>
                Hotline: 1900.8888.33
              </div>
              <div>
                <i class="fa-solid fa-envelope"></i>
                Email: info@littlegardenspa.vn
              </div>
              <div>
                <i class="fa-solid fa-clock"></i>
                Thời gian làm việc: 9h00 - 20h30 hằng ngày
              </div>
              <div> Theo dõi chúng tôi tại:</div>
              <a
                href="https://www.facebook.com/mabeautypremium"
                class="fa-brands fa-facebook"
              ></a>
            </div>
          </div>

          <div className="footer-service">
            <div className="header-service"> DỊCH VỤ NỔI BẬT</div>
            <div className="service-details">
              <div>Triệt lông cơ thể</div>
              <div>Tắm trắng body</div>
              <div>Nâng cơ trẻ hóa</div>
              <div>Căng chỉ</div>
              <div>Trị thâm</div>
              <div>Điều trị mụn</div>
              <div>Phun xăm thẩm mỹ</div>
              <div>Chăm sóc da</div>
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
