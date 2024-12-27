import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogBySlug } from "../services/strapiAPI"; // Giả sử bạn đã tạo file này như trước

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlogDetail = async () => {
      const data = await fetchBlogBySlug(slug);
      setBlog(data);
    };
    getBlogDetail();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetail;
