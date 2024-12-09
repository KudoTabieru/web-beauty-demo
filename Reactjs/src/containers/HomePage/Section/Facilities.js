import React, { Component } from "react";
import { connect } from "react-redux";
import "./Facilities.scss";
import Video from "../../../assets/facilities.mp4";

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
              <div className="services-details-right">
                LG Clinic chú trọng đầu tư cơ sở vật chất hiện đại bậc nhất, với
                hệ thống thẩm mỹ và phòng khám quy mô lớn được thiết kế theo
                tiêu chuẩn 5 sao. Không gian sang trọng, tinh tế kết hợp cùng
                trang thiết bị công nghệ tiên tiến hàng đầu, mang đến cho khách
                hàng trải nghiệm đẳng cấp và thoải mái tuyệt đối trong hành
                trình chăm sóc sắc đẹp.
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
