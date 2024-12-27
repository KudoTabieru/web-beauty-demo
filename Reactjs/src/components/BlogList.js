import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../services/strapiAPI";
import "./BlogList.scss";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Danh sách bài viết</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h3 className="blog-title">{blog.attributes.title}</h3>
          <p className="blog-content">
            {blog.attributes.content.slice(0, 100)}...
          </p>
          <a href={`/blog/${blog.id}`} className="blog-read-more">
            Xem thêm
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
