import React from 'react'
import Meta from "../components/Meta/Meta";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import SingleBlogContent from '../components/SingleBlogContent/SingleBlogContent';

function SingleBlog() {
  return (
    <>
      <Meta title="Dynamic blog title" />
      <BreadCrumb title="Dynamic blog title" />
      <SingleBlogContent />
    </>
  );
}

export default SingleBlog;
