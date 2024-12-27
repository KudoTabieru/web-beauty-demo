import React, { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Service: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwx_fDClGIpoNfn5SBKQ3JkOZJWUmjQJK6UFYhJM-eltIcpYIgzY3vmW1-w6YBe2Sg2/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData), // Gửi dữ liệu dạng form-urlencoded
        }
      );

      if (response.ok) {
        setResponseMessage("Gửi thông tin thành công!");
        setFormData({ Name: "", Phone: "", Service: "", Message: "" }); // Reset form
      } else {
        setResponseMessage(
          "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại."
        );
      }
    } catch (error) {
      setResponseMessage("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Contact">
      <h1>LIÊN HỆ VỚI CHÚNG TÔI </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Họ và tên"
          name="Name"
          type="text"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Số điện thoại"
          name="Phone"
          type="tel"
          value={formData.Phone}
          onChange={handleChange}
          required
        />
        {/* <input
          placeholder="Loại hình dịch vụ"
          name="Service"
          type="text"
          value={formData.Service}
          onChange={handleChange}
          required
        /> */}

        <select
          name="Service"
          value={formData.Service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Chọn loại hình dịch vụ
          </option>
          <option value="Tẩy tế bào chết">Tẩy tế bào chết</option>
          <option value="Tắm trắng Body">Tắm trắng Body</option>
          <option value="Nâng cơ trẻ hóa">Nâng cơ trẻ hóa</option>
          <option value="Triệt lông">Triệt lông</option>
        </select>

        <input
          placeholder="Nội dung cần tư vấn"
          name="Message"
          type="text"
          value={formData.Message}
          onChange={handleChange}
          required
        />
        <button className="btn-submit" type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : "ĐĂNG KÍ NGAY"}
        </button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}
