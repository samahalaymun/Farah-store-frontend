import React from "react";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperWrapper from "../Swiper/SwiperWrapper";
import ProductCard from "../ProductCard/ProductCard";

function ProductsSection() {
  return (
    <section className=" py-5">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <SectionHeading header="Featured Products" />
          </div>
          <SwiperWrapper>
            <SwiperSlide>
              <ProductCard
                img="images/crown-logo.webp"
                brand="Farah"
                title="Crown silver"
                price="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img="images/bags.jpg"
                brand="Farah"
                title="leather white bag"
                price="100"
                discount={0.20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img="images/corset.webp"
                brand="Farah"
                title="black corset"
                price="250"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img="images/heels.webp"
                brand="Camden"
                title="white camden heels"
                price="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img="images/crown-logo.webp"
                brand="Farah"
                title="Crown silver"
                price="150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img="images/crown-logo.webp"
                brand="Farah"
                title="Crown silver"
                price="150"
              />
            </SwiperSlide>
          </SwiperWrapper>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
