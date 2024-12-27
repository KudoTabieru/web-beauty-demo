// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "./Booking.scss";
// import { useState } from "react";

// export default function Booking() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     e.preventDefault();
//     console.log("Submitted");
//     const formData = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwNrOHWCleBtEOHiowVKVUChlUJVeMPMq3nHT-woz-7F2aI3ZvCpCI2WuO6-VV9pCHDgw/exec",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//   }

//   return (
//     <div className="Booking">
//       <h1>ĐẶT LỊCH HẸN</h1>
//       <form className="form" onSubmit={(e) => Submit(e)}>
//         <input placeholder="Họ và tên" name="Name" type="text" />
//         <input placeholder="Số điện thoại" name="Phone" type="tel" />
//         <input placeholder="Nội dung chi tiết" name="Message" type="text" />
//         <input className="btn-submit" type="submit" />
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Booking.scss";

export default function Booking() {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
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
        "https://script.google.com/macros/s/AKfycbwNrOHWCleBtEOHiowVKVUChlUJVeMPMq3nHT-woz-7F2aI3ZvCpCI2WuO6-VV9pCHDgw/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData), // Gửi dữ liệu dạng form-urlencoded
        }
      );

      if (response.ok) {
        setResponseMessage("Gửi thông tin thành công!");
        setFormData({ Name: "", Phone: "", Message: "" }); // Reset form
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
    <div className="Booking">
      <h1>ĐẶT LỊCH HẸN</h1>
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
        <input
          placeholder="Nội dung chi tiết"
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
