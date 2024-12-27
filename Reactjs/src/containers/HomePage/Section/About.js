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
              <div className="about-us-left">VỀ CHÚNG TÔI</div>
              <div className="welcome-left">WELCOME TO MẠ BEAUTY</div>
              <div className="details-left">
                Lấy cảm hứng từ những cây mạ non - nhỏ bé và tràn đầy sức sống,
                Mạ Beauty ra đời với niềm tin rằng mỗi làn da đều có tiềm năng
                tỏa sáng, giống như những ngọn mạ vươn lên từ đất lành. Với sứ
                mệnh “Ươm mầm sắc đẹp”, chúng tôi mong muốn đồng hành cùng khách
                hàng trong hành trình nuôi dưỡng và phát triển vẻ đẹp tự nhiên,
                bền vững theo thời gian.
              </div>
              <div className="details-left">
                Cái tên “Mạ Beauty” không chỉ gợi nhắc hình ảnh những cây mạ
                non, mà còn mang theo thông điệp về sự tái sinh và vươn mình
                phát triển. Triết lý này được chúng tôi gửi gắm vào từng dịch
                vụ: mỗi làn da đều có thể “tái sinh” khi được chăm sóc tận tâm
                và đúng cách. Tại Mạ Beauty, mỗi trải nghiệm không chỉ đơn thuần
                cải thiện vẻ bề ngoài mà còn là hành trình khám phá và tôn vinh
                nét đẹp riêng biệt trong mỗi con người.
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
