import React from 'react'
import BlogCard from '../BlogSection/BlogCard';
import PageInnerTab from '../Common/PageInnerTab/PageInnerTab';
import CardTitle from '../Common/CardTitle/CardTitle';
import DropDown from "../Common/DropDown/DropDown"
function ShowBlogs() {
  return (
    <>
      <PageInnerTab>
        <div className="d-flex align-items-center justify-content-between ">
          <CardTitle title="Find By Categories" className="card-title mb-0" />
          <DropDown
            id="findByCategoriesDropDown"
            label="Find By Categories"
            options={["Accessories", "Shoes", "Bags", "Corset"]}
            className="btn sortByBtn dropdown-toggle bg-transparent
                 border-0 gap-15 d-flex align-items-center"
            ulClassName="sortByDropDown"
          />
        </div>
      </PageInnerTab>

      <div className="blogs-list pb-5">
        <BlogCard
          img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
          date="1 dec 2022"
          title="beautiful monday morning"
          desc="It is a long established fact that a reader will be distracted by the"
        />
        <BlogCard
          img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
          date="1 dec 2022"
          title="beautiful monday morning"
          desc="It is a long established fact that a reader will be distracted by the"
        />
        <BlogCard
          img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
          date="1 dec 2022"
          title="beautiful monday morning"
          desc="It is a long established fact that a reader will be distracted by the"
        />
        <BlogCard
          img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
          date="1 dec 2022"
          title="beautiful monday morning"
          desc="It is a long established fact that a reader will be distracted by the"
        />
      </div>
    </>
  );
}

export default ShowBlogs
