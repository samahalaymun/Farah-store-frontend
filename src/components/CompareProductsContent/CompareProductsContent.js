import React from "react";
import "./CompareProductsContent.css";
import CompareProductCard from "./CompareProductCard";
function CompareProductsContent() {
  return (
    <div className="compare-products-wrapper py-4">
      <div className="container-xxl ">
        <ul className="compare-products-list px-0">
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/crown-logo.webp"}
              title="Crown silver"
              price="150"
              brand="Farah"
              availability="In Stock"
              size="-"
              color={["silver", "gold", "rosybrown"]}
              compareCard={true}
            />
          </li>
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/bags.jpg"}
              title="leather white bag"
              price="100"
              discount={0.2}
              brand="Farah"
              availability="In Stock"
              size="-"
              color={["white", "black", "brown", "red"]}
              compareCard={true}
            />
          </li>
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/corset.webp"}
              title="black corset"
              price="150"
              brand="Farah"
              availability="In Stock"
              size={["s", "m", "L", "XL"]}
              color={["gray", "black", "#eebb99"]}
              compareCard={true}
            />
          </li>
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/heels.webp"}
              title="white camden heels"
              price="250"
              brand="Camden"
              availability="In Stock"
              size={["37", "38", "39", "40"]}
              color={["silver", "gold", "black", "white", "#C19A6B"]}
              compareCard={true}
            />
          </li>
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/heels.webp"}
              title="white camden heels"
              price="250"
              brand="Camden"
              availability="In Stock"
              size={["37", "38", "39", "40"]}
              color={["silver", "gold", "black", "white", "#C19A6B"]}
              compareCard={true}
            />
          </li>
          <li>
            <CompareProductCard
              img={process.env.PUBLIC_URL + "/images/heels.webp"}
              title="white camden heels"
              price="250"
              brand="Camden"
              availability="In Stock"
              size={["37", "38", "39", "40"]}
              color={["silver", "gold", "black", "white", "#C19A6B"]}
              compareCard={true}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CompareProductsContent;
