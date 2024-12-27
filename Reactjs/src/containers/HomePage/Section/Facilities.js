import React, { Component } from "react";
import { connect } from "react-redux";
import "./Facilities.scss";
import Video from "../../../assets/ma_beauty_video.mp4";

class Facilities extends Component {
  render() {
    return (
      <div>
        <div className="facilities-container">
          <div className="facilities-content">
            <div className="left-content">
              <video className="video-facilities" controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <div className="services-right-content">
              <div className="services-header-right">
                CƠ SỞ VẬT CHẤT HIỆN ĐẠI
              </div>
              <hr></hr>
              <div className="services-details-right">
                Mạ Beauty luôn chú trọng đến không gian và cơ sở vật chất để
                mang đến cho khách hàng trải nghiệm thoải mái và an tâm tuyệt
                đối. Không gian spa được thiết kế hiện đại, rộng rãi, mang đến
                cảm giác thư giãn ngay từ lần đầu tiên bước vào. Cùng với đó,
                chúng tôi sử dụng các thiết bị máy móc tiên tiến, đảm bảo hiệu
                quả tối ưu cho mọi liệu trình. Mạ Beauty cam kết duy trì tiêu
                chuẩn vệ sinh nghiêm ngặt giúp bạn hoàn toàn yên tâm khi tận
                hưởng dịch vụ làm đẹp tại đây.
              </div>
              <div className="services-btn">
                <button className="services-btn-decor">TƯ VẤN NGAY</button>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Facilities);
