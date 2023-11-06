import React from 'react'
import CheckoutCartCard from './CheckoutCartCard';

function CheckoutCartinformation() {
  return (
    <div className="checkout-cart-information">
      <div className="border-bottom d-flex flex-column gap-20">
        <CheckoutCartCard
          img={
            "https://sothebys-md.brightspotcdn.com/dims4/default/9ff9d3c/2147483647/strip/true/crop/1850x1850+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F0a%2Fd4%2Fb85545d44c2797d78de5b91abf01%2Fhkmrkt-clpxs-t3-02.jpg"
          }
          price="100"
          title="leather white bag"
          color="white"
          quantity={2}
        />
        <CheckoutCartCard
          img={
            "https://sothebys-md.brightspotcdn.com/dims4/default/454d187/2147483647/strip/true/crop/2386x2386+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F1d%2F91%2Fafb1ae4b49c1845378cbf923ee6a%2Fpalladium-and-diamond-drop-earrings.jpg"
          }
          price="22000"
          title="Palladium and Diamond Drop Earrings"
          color="silver"
          quantity={1}
        />
      </div>
      <div className="border-bottom py-4">
        <div className="d-flex justify-content-between  align-items-center ">
          <p className="mb-0 total">Subtotal</p>
          <p className="mb-0 total-price">₪ 32200</p>
        </div>
        <div className="d-flex justify-content-between  align-items-center mt-2">
          <p className="mb-0 total">Shipping</p>
          <p className="mb-0 total-price">₪ 20</p>
        </div>
      </div>
      <div className="d-flex justify-content-between  align-items-center py-4">
        <h4 className="mb-0 total">Total</h4>
        <h5 className="mb-0 total-price">
          <span className="currency">NIS </span>₪32220
        </h5>
      </div>
    </div>
  );
}

export default CheckoutCartinformation
