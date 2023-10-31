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

function ProductsSection({header}) {
  return (
    <section className=" py-4">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <SectionHeading header={header} />
          </div>
          <SwiperWrapper>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
                brand="Farah"
                title="Crown silver"
                price="150"
                className="home-card-wrapper"
                rating={3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/bags.jpg"}
                brand="Farah"
                title="leather white bag"
                price="100"
                discount={0.2}
                className="home-card-wrapper"
                rating={3.5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/corset.webp"}
                brand="Farah"
                title="black corset"
                price="250"
                className="home-card-wrapper"
                rating={0}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/heels.webp"}
                brand="Camden"
                title="white camden heels"
                price="150"
                className="home-card-wrapper"
                rating={2.5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
                brand="Farah"
                title="Crown silver"
                price="150"
                className="home-card-wrapper"
                rating={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
                brand="Farah"
                title="Crown silver"
                price="150"
                className="home-card-wrapper"
                rating={5}
              />
            </SwiperSlide>
          </SwiperWrapper>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
