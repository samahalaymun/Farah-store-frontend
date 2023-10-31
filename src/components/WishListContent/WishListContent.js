import React from 'react'
import "./WishListContent.css";
import CompareProductCard from '../CompareProductsContent/CompareProductCard';

function WishListContent() {
  return (
    <div className="wishlist-wrapper py-4">
      <div className="container-xxl ">
        <div className="row flex-wrap product-list-wrapper ">
          <div className="col-lg-3 col-md-4 col-6">
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
              title="Crown silver"
              price="150"
              brand="Farah"
              availability="In Stock"
              size="-"
              color={["silver", "gold", "rosybrown"]}
              compareCard={false}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/bags.jpg"}
              title="leather white bag"
              price="100"
              discount={0.2}
              brand="Farah"
              availability="In Stock"
              size="-"
              color={["white", "black", "brown", "red"]}
              compareCard={false}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/corset.webp"}
              title="black corset"
              price="150"
              brand="Farah"
              availability="In Stock"
              size={["s", "m", "L", "XL"]}
              color={["gray", "black", "#eebb99"]}
              compareCard={false}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/heels.webp"}
              title="white camden heels"
              price="250"
              brand="Camden"
              availability="In Stock"
              size={["37", "38", "39", "40"]}
              color={["silver", "gold", "black", "white", "#C19A6B"]}
              compareCard={false}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/heels.webp"}
              title="white camden heels"
              price="250"
              brand="Camden"
              availability="In Stock"
              size={["37", "38", "39", "40"]}
              color={["silver", "gold", "black", "white", "#C19A6B"]}
              compareCard={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListContent
