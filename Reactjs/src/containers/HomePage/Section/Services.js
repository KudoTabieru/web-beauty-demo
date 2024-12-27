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
        <div className="services-container">
          <div className="services-content">
            <div className="services-left-content">
              <div className="services-header-left">CÁC DỊCH VỤ CAO CẤP</div>
              <hr></hr>
              <div className="services-details-left">
                Mạ Beauty tự hào mang đến các dịch vụ làm đẹp chuyên sâu, đảm
                bảo chăm sóc và cải thiện làn da hiệu quả, an toàn. Với công
                nghệ hiện đại cùng đội ngũ kỹ thuật viên giàu kinh nghiệm, chúng
                tôi cam kết mang đến những trải nghiệm tối ưu, giúp bạn tự tin
                và yêu thương bản thân hơn sau mỗi lần trải nghiệm.
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
                      Dịch vụ chăm sóc da giúp làm sạch sâu, cung cấp dưỡng chất
                      và phục hồi làn da, mang lại vẻ đẹp rạng rỡ và khỏe mạnh.
                      Các liệu trình được thiết kế riêng biệt để phù hợp với
                      từng loại da và nhu cầu riêng biệt của khách hàng.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-2" />
                    <div className="header-img">TIÊM MESO</div>
                    <div className="services-right-details">
                      Tiêm Meso giúp bổ sung dưỡng chất vào sâu trong da, tái
                      tạo và phục hồi da nhanh chóng, làm sáng da, giảm nếp nhăn
                      và ngăn ngừa lão hóa hiệu quả.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-3" />
                    <div className="header-img">TRIỆT LÔNG</div>
                    <div className="services-right-details">
                      Với công nghệ triệt lông hiện đại, dịch vụ triệt lông mang
                      lại làn da mịn màng và sạch lông lâu dài, giúp bạn thoải
                      mái và tự tin hơn trong mọi hoạt động.
                    </div>
                    <div className="more-infor">
                      <button className="btn-more-infor">TÌM HIỂU THÊM</button>
                    </div>
                  </div>
                  <div className="img-services-customize">
                    <div className="img-customize-4" />
                    <div className="header-img">PEEL DA</div>
                    <div className="services-right-details">
                      Dịch vụ peel da giúp loại bỏ tế bào chết, làm mới làn da,
                      cải thiện các vấn đề như mụn, sạm da và mang lại làn da
                      sáng khỏe, đều màu hơn.
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
