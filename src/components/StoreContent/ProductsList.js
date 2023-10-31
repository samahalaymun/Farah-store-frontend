import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

function ProductsList() {
  return (
    <div className="products-list  pb-5">
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={4}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/bags.jpg"}
        brand="Farah"
        title="leather white bag"
        price="100"
        discount={0.2}
        rating={3.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/corset.webp"}
        brand="Farah"
        title="black corset"
        price="250"
        rating={4.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/heels.webp"}
        brand="Camden"
        title="white camden heels"
        price="150"
        rating={1.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={4.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={2.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={3.5}
      />
      <ProductCard
        img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
        brand="Farah"
        title="Crown silver"
        price="150"
        rating={3.5}
      />
    </div>
  );
}

export default ProductsList
