import axios from "axios";

const API_URL = "http://localhost:1337/api"; // Đổi thành domain nếu deploy lên server

// Lấy danh sách bài blog
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs?populate=*`);
    return response.data.data; // Trả về danh sách bài blog
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Lấy chi tiết 1 bài blog theo slug
export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      params: {
        filters: { slug: slug },
        populate: "*",
      },
    });
    return response.data.data[0]; // Trả về bài blog đầu tiên khớp slug
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};
