import React from 'react'
import "./GallerySection.css";

function GallerySection() {
  return (
    <section className=" py-5">
      <div className="gallery-wrapper">
        <div className="row gx-0 ">
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img src="images/crown-logo.webp" alt="gallery" />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img src="images/heels.webp" alt="gallery" />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img src="images/wedding-heels.webp" alt="gallery" />
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="gallery-img">
              <img
                src="images/wedding-bags.jpg"
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
