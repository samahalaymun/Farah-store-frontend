import React from "react";
import RandomProduct from "./RandomProduct";

function RandomProducts() {
  return (
    <div>
      <RandomProduct
        img={process.env.PUBLIC_URL + "/images/wedding-heels.webp"}
        title="wedding white heels"
        price={90}
      />
      <RandomProduct
        img={process.env.PUBLIC_URL + "/images/wedding-shoes.webp"}
        title="wedding white heels"
        price={150}
      />
    </div>
  );
}

export default RandomProducts;
