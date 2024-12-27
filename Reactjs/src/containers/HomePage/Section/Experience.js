import React, { Component } from "react";
import { connect } from "react-redux";
import "./Experience.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Experience extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <div className="experience-container">
          <div className="experience-content">
            <div className="experience-header">TRẢI NGHIỆM KHÁCH HÀNG</div>
            <hr></hr>
            <div className="experience-right-content">
              <div className="img-right">
                <Slider {...settings}>
                  <div className="img-experience-customize">
                    <div className="img-customize-1" />
                    <div className="header-img">CHĂM SÓC DA</div>
                    <div className="experience-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-experience-customize">
                    <div className="img-customize-2" />
                    <div className="header-img">ĐIỀU TRỊ MỤN</div>
                    <div className="experience-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-experience-customize">
                    <div className="img-customize-3" />
                    <div className="header-img">NÂNG CƠ TRẺ HÓA</div>
                    <div className="experience-right-details">
                      Chăm sóc da chuyên sâu với liệu pháp tái tạo Trường Sinh
                      là chìa khóa cho nét đẹp không tuổi, giúp khôi phục làn da
                      tươi trẻ, săn chắc từ bên trong.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-experience-customize">
                    <div className="img-customize-4" />
                    <div className="header-img">TRIỆT LÔNG CƠ THỂ</div>
                    <div className="experience-right-details">
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

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
