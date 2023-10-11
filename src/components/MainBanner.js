import React from 'react'
import Carousel from './Carousel/Carousel';
import MainBannerCard from './MainBannerCard';

function MainBanner({items}) {
  return (
    <section className="home-wrapper-1 ">
      <div>
        <div className="row gx-0 ">
          <div className="col-12">
            <Carousel>
              {items.map((item,index)=>{
                return (
                  <div
                    className={`carousel-item ${index == 0 ? "active" : ""}`}
                  >
                    <MainBannerCard
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner
