import React, { Component } from "react";
import { connect } from "react-redux";
import "./Intro.scss";

class Intro extends Component {
  render() {
    return (
      <div>
        <div className="intro-container">
          <div className="intro-img"> </div>
          <div className="intro-content  ">
            <div className="section-1">
              <div className="section-1-left "></div>
              <div className="section-1-right">
                <div className="title-1-right">
                  Mạ Beauty Premium- giữ mãi nét thanh xuân, góp phần tôn vinh
                  vẻ đẹp Việt.
                </div>
                <div className="title-1-content">
                  <p>
                    Trực thuộc hệ thống Mạ Group, với sứ mệnh nâng tầm vẻ đẹp
                    Việt, giúp người Việt tự tin và tỏa sáng hơn mỗi ngày, Viện
                    Chăm sóc Sức khỏe và Sắc đẹp Mạ Beauty Premium, dưới sự dẫn
                    dắt của bà .... – một chuyên gia hàng đầu trong lĩnh vực làm
                    đẹp, đang và sẽ tiếp tục mang đến cho khách hàng những trải
                    nghiệm dịch vụ và sản phẩm cao cấp nhất, xứng tầm đẳng cấp
                    quốc tế.
                  </p>
                  <p>
                    Khởi nguồn từ niềm đam mê làm đẹp và khát khao mang lại giá
                    trị khác biệt, bà Nguyễn Thanh Mạ đã khẳng định tên tuổi với
                    hàng loạt thành công trong lĩnh vực chăm sóc sắc đẹp. Từ
                    những năm đầu thế kỷ 21, bà đã tiên phong đưa các công nghệ
                    làm đẹp hiện đại nhất về Việt Nam, khởi đầu với các dịch vụ
                    chăm sóc sắc đẹp cá nhân hóa, đáp ứng mọi nhu cầu của khách
                    hàng khó tính nhất.
                  </p>
                  <p>
                    Đến năm 2015, nhận thấy tiềm năng to lớn của thị trường làm
                    đẹp cao cấp, bà .... đã sáng lập Mạ Beauty Premium, mang đến
                    một mô hình hoàn toàn mới – nơi kết hợp giữa nghệ thuật chăm
                    sóc sắc đẹp tinh tế và công nghệ y khoa hiện đại. Đây là địa
                    chỉ được tin tưởng hàng đầu bởi các doanh nhân, chính khách,
                    nghệ sĩ nổi tiếng trong nước và quốc tế nhờ đội ngũ bác sĩ
                    chuyên gia hàng đầu đến từ Mỹ, Hàn Quốc và châu Âu.
                  </p>
                  <p>
                    Tập trung vào phân khúc khách hàng cao cấp, ngay từ những
                    ngày đầu, Mạ Beauty Premium đã tạo ra sự khác biệt mà ít
                    thương hiệu làm đẹp nào có thể sánh được. Tại đây, chúng tôi
                    quy tụ những công nghệ làm đẹp tiên tiến nhất, được FDA Hoa
                    Kỳ chứng nhận về độ an toàn và hiệu quả, kết hợp cùng đội
                    ngũ chuyên gia – bác sĩ 100% được Bộ Y tế Việt Nam cấp phép
                    hành nghề.
                  </p>
                  <p>
                    Mạ Beauty Premium không chỉ là nơi mang đến vẻ đẹp hoàn hảo
                    mà còn là người bạn đồng hành giúp khách hàng lưu giữ mãi
                    nét thanh xuân. Chúng tôi tự hào phục vụ hàng triệu khách
                    hàng, bao gồm những chính khách, doanh nhân và ngôi sao hàng
                    đầu trong và ngoài nước.
                  </p>
                  <p>
                    Với không gian sang trọng, riêng tư và phong cách phục vụ
                    tận tâm, chuyên nghiệp, Mạ Beauty Premium cam kết mang đến
                    cho khách hàng những trải nghiệm vượt trội, giúp bạn tìm
                    thấy sự hài hòa và tỏa sáng với vẻ đẹp tự nhiên, thanh lịch
                    và trường tồn theo thời gian.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="section-2-title">
                TẦM NHÌN, SỨ MỆNH VÀ GIÁ TRỊ CỐT LÕI CỦA MẠ BEAUTY PREMIUM
              </div>
              <div className="section-2-content">
                <div className="section-2-left"></div>
                <div className="section-2-right">
                  <div className="section-2-right-title">TẦM NHÌN</div>
                  <hr></hr>
                  <div className="section-2-right-details">
                    Mạ Beauty ra đời với mục tiêu trở thành địa chỉ làm đẹp
                    chuyên nghiệp và uy tín, nơi khách hàng không chỉ thay đổi
                    ngoại hình mà còn được trải nghiệm sự chăm sóc đặc biệt,
                    nâng niu từng cảm giác thư giãn. Chúng tôi cam kết phát
                    triển thành hệ thống clinic thẩm mỹ hàng đầu, cung cấp các
                    dịch vụ hiện đại và chuyên sâu, đáp ứng mọi nhu cầu làm đẹp
                    của khách hàng, giúp họ tự tin và tỏa sáng mỗi ngày.
                  </div>
                </div>
              </div>
            </div>
            <div className="section-3">
              <div className="section-3-content">
                <div className="section-3-left">
                  <div className="section-3-left-title">SỨ MỆNH</div>
                  <hr></hr>
                  <div className="section-3-left-details">
                    Mạ Beauty cam kết mang đến những trải nghiệm làm đẹp hiệu
                    quả và an toàn, không chỉ giúp cải thiện vẻ ngoài mà còn
                    nâng cao sự tự tin và yêu thương bản thân. Chúng tôi luôn
                    tìm kiếm và cập nhật những công nghệ làm đẹp tiên tiến, phù
                    hợp nhất để mang lại kết quả rõ ràng và bền vững cho từng
                    khách hàng.
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
