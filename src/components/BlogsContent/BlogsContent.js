import React from "react";
import "./BlogsContent.css";
import Card from "../Common/Card/Card";
import CardTitle from "../Common/CardTitle/CardTitle";
import ShopByCat from "../StoreContent/ShopByCat";
import ShowBlogs from "./ShowBlogs";

function BlogsContent() {
  return (
    <div className="blogs-wrapper py-4">
      <div className="container-xxl ">
        <ShowBlogs />
      </div>
    </div>
  );
}

export default BlogsContent;
