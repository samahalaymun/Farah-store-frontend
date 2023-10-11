import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperWrapper.css";

function SwiperWrapper({children}) {
  return (
    <Swiper
      cssMode={true}
      slidesPerView={3}
      slidesPerGroup={3}
      slidesPerGroupSkip={3}
      centeredSlides={false}
      allowTouchMove={true}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
         
        },
        520: {
          slidesPerView: 2,
  
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
       
        },
      }}
      scrollbar={false}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="blog-swiper"
      style={{
        padding: "0 10px 30px",
      }}
    >
      {children}
    </Swiper>
  );
}

export default SwiperWrapper;
