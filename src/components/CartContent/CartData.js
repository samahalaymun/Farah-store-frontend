import React from "react";
import CartCard from "./CartCard";


function CartData() {
  return (
    <div className="d-flex flex-column gap-10">
      <CartCard
        img={
          "https://sothebys-md.brightspotcdn.com/dims4/default/9ff9d3c/2147483647/strip/true/crop/1850x1850+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F0a%2Fd4%2Fb85545d44c2797d78de5b91abf01%2Fhkmrkt-clpxs-t3-02.jpg"
        }
        color="white"
        title="leather white bag"
        quantity={2}
        price="100"
      />
      <CartCard
        img={
          "https://sothebys-md.brightspotcdn.com/dims4/default/454d187/2147483647/strip/true/crop/2386x2386+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F1d%2F91%2Fafb1ae4b49c1845378cbf923ee6a%2Fpalladium-and-diamond-drop-earrings.jpg"
        }
        price="22000"
        title="Palladium and Diamond Drop Earrings"
        color="silver"
        quantity={1}
      />
      <CartCard
        title="Nike, Louis Vuitton"
        img={
          "https://media.femalemag.com.sg/public/2022/05/lv-nike.jpg?compress=true&quality=80&w=480&dpr=2.6"
        }
        price="10000"
        size="38"
        color="white"
        quantity={1}
      />
    </div>
  );
}

export default CartData;
