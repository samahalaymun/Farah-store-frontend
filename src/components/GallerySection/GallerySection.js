import React from 'react'
import "./GallerySection.css";

function GallerySection() {
  return (
    <section className="pt-4">
      <div className="gallery-wrapper">
        <div className="row gx-0 ">
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img
                src={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img
                src={process.env.PUBLIC_URL + "/images/heels.webp"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img
                src={process.env.PUBLIC_URL + "/images/wedding-heels.webp"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img
                src={process.env.PUBLIC_URL + "/images/wedding-bags.jpg"}
                alt="gallery"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection
