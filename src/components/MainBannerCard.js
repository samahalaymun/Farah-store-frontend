import React from 'react'
import { Link } from 'react-router-dom';

function MainBannerCard({ title, description, image,link }) {
  return (
      <div className="main-banner position-relative ">
        <img src={image} alt="main banner" className=" " />
        <div className="main-banner-content position-absolute ">
          <h4 className="banner-content-header">{title}</h4>
          <p className="banner-content-description">{description}</p>
          <Link className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
  );
}

export default MainBannerCard
