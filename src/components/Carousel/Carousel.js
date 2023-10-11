import React from 'react'
import MainBannerCard from '../MainBannerCard'
import "../Carousel/Carousel.css"

function Carousel({ children}) {
  console.log(children.length)
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
      {
        children.map((item,index)=>{
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={index}
              class={index == 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index+1}`}
            ></button>
          );
        })
      }
       
      </div>
      <div className="carousel-inner">
        {/* <div className="carousel-item active" data-bs-interval="10000">
          <MainBannerCard
            title={items[0].title}
            description={items[0].description}
            image={items[0].image}
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <MainBannerCard
            title={items[1].title}
            description={items[1].description}
            image={items[1].image}
          />
        </div>
        <div className="carousel-item">
          <MainBannerCard
            title={items[0].title}
            description={items[0].description}
            image={items[0].image}
          />
        </div> */}
        {children}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel
