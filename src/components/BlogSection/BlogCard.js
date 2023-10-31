import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ img,date,title,desc }) {
  return (
    <Link>
      <div className="blog-card">
        <div className="card-img">
          <img src={img} alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5 className="title">{title}</h5>
          <p className="desc">{desc}</p>
          <Link className="btn btn-primary ">Read More</Link>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
