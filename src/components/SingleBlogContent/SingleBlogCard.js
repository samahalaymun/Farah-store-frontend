import React from "react";
import { Link } from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
function SingleBlogCard() {
  return (
    <div className="single-blog-card">
      <Link to="/blogs" className="d-flex align-items-center gap-10">
        <IoMdArrowBack className="fs-4" /> Go back to blogs
      </Link>
      <h3 className="title">beautiful monday morning</h3>
      <img
        src={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
        alt="blog card"
        className="w-100 img-fluid my-4"
      />
      <p>
        It is a long established fact that a reader will be distracted by the It
        is a long established fact that a reader will be distracted by the
      </p>
      <p className="blog-post-date">4, april, 2022</p>
    </div>
  );
}

export default SingleBlogCard;
