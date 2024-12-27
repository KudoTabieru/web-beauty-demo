import React, { Component } from "react";
import { connect } from "react-redux";
import "./FooterMap.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class FooterMap extends Component {
  render() {
    // const mapContainerStyle = {
    //   width: "100%",
    //   height: "100%",
    //   // Bo tròn góc map
    // };

    // const center = {
    //   lat: 10.791165, // Latitude của Hồ Chí Minh
    //   lng: 106.667221, // Longitude của Hồ Chí Minh
    // };
    return (
      <div>
        <div className="footerMap-container">
          <div className="footerMap-content">
            <div className="footerMap-header">HỒ CHÍ MINH</div>
            <div className="column-footer">
              <div className="column-left">
                <div className="column-left-header">HỒ CHÍ MINH</div>
                <div className="column-left-details">
                  <div>
                    <i class="fa-solid fa-location-dot"> </i>
                    Mạ Beauty Premium - 169 Đặng Văn Ngữ, phường 13, quận Phú
                    Nhuận, Thành phố Hồ Chí Minh.
                  </div>
                  <div>
                    <i class="fa-solid fa-envelope"></i>
                    support@mabeautyclinic.com
                  </div>
                  <div>
                    <i class="fa-solid fa-phone-volume"></i>
                    093 157 25 73
                  </div>

                  <div>
                    <i class="fa-solid fa-clock"></i>
                    Giờ làm việc :9h00 - 19h00
                  </div>
                </div>
              </div>
              <div className="column-right">
                <iframe
                  className="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2629046857296!2d106.667221!3d10.791165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b5416ab4ad%3A0x1d5bfafc9e8ca76c!2sM%E1%BA%A1%20Beauty%20Premium!5e0!3m2!1svi!2s!4v1734442683640!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: "0" }} // Thay đổi đây từ chuỗi thành đối tượng
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterMap);
