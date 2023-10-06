import React from 'react'
import MainBannerCard from '../MainBannerCard'
import "../Carousel/Carousel.css"

function Carousel() {
    const items = [
      {
        title: "Wedding Accessories",
        description: " All Accessories you need in your big day",
        image: "/images/WeddingAccessories.png",
      },
      {
        title: "Women Shoes",
        description: "Heels, sandals, boots, and more you can find in our store",
        image: "/images/WomenShoes.png",
      },
      {
        title: "Wedding Accessories",
        description: " All Accessories you need in your big day",
        image: "/images/WeddingAccessories.png",
      },
    ];
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
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
        </div>
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
