import React from 'react'
import { Link } from 'react-router-dom';
import MainBannerCard from '../components/MainBannerCard';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 ">
        <div className=" ">
          <div className="row gx-0 ">
            <div className="col-12">
              
             <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
