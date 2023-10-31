import React from 'react'
import Meta from '../components/Meta/Meta';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import BlogsContent from '../components/BlogsContent/BlogsContent';

function Blogs() {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <BlogsContent />
    </>
  );
}

export default Blogs
