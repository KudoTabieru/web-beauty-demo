import React, { Component } from "react";
import { connect } from "react-redux";
import "./Services.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Services extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="services-container">
          <div className="services-content">
            <div className="services-left-content">
              <div className="services-header-left">CÁC DỊCH VỤ CAO CẤP</div>
              <div className="services-details-left">
                Nắm bắt xu thế làm đẹp thời thượng, Viện Thẩm mỹ LG Clinic tự
                hào mang đến các dịch vụ cao cấp nhất trong lĩnh vực thẩm mỹ và
                chăm sóc da. Với sự kết hợp hoàn hảo giữa công nghệ làm đẹp tiên
                tiến và đội ngũ chuyên gia hàng đầu, mỗi liệu trình tại LG
                Clinic không chỉ là một dịch vụ mà còn là hành trình hoàn thiện
                nhan sắc đỉnh cao và hoàn hảo.
              </div>
              <div className="services-btn">
                <button className="services-btn-decor">TƯ VẤN NGAY</button>
              </div>
            </div>
            <div className="services-right-content">
              <div className="img-right">
                <Slider {...settings}>
                  <div className="img-services-customize">
                    <div className="img-customize-1" />
                    <div className="header-img">CHĂM SÓC DA</div>
                    <div className="services-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-2" />
                    <div className="header-img">ĐIỀU TRỊ MỤN</div>
                    <div className="services-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-3" />
                    <div className="header-img">NÂNG CƠ TRẺ HÓA</div>
                    <div className="services-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-4" />
                    <div className="header-img">TRIỆT LÔNG CƠ THỂ</div>
                    <div className="services-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="image-services " />
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
