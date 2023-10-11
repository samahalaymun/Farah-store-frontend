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
      data-bs-touch="true"
    >
      <div class="carousel-indicators">
        {children.map((item, index) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={index}
              class={index == 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">{children}</div>
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
