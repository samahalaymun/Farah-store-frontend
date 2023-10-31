import React from "react";
import "./BlogSection.css";
import BlogCard from "./BlogCard";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import Swiper from "../Swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import SwiperWrapper from "../Swiper/SwiperWrapper";


function BlogSection() {
  return (
    <section className=" py-4">
      <div className="container-xxl ">
        <div className="row flex-wrap blog-wrapper">
          <div className="col-12">
            <SectionHeading header="Our Latest News" />
          </div>
          <SwiperWrapper slidesNum={3}>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                img={process.env.PUBLIC_URL + "/images/blog-1.jpg"}
                date="1 dec 2022"
                title="beautiful monday morning"
                desc="It is a long established fact that a reader will be distracted by the"
              />
            </SwiperSlide>
          </SwiperWrapper>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
