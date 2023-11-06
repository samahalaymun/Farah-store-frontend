import React from 'react'
import "./Policies.css"
function ShippingPolicyContent() {
  return (
    <div className="shipping-wrapper py-4">
      <div className="container-xxl ">
        <h3>DELIVERIES, SHIPPING</h3>
        <p>
          1 when you have submitted an order, you will receive an email from us
          acknowledging that we have received your order and confirming the
          details of your order, including the full shipping address and your
          order number. once the order is ready to be dispatched, you will
          receive a shipment confirmation email with tracking number.
        </p>
        <p>2 we ship to over 99% of the countries of the world.</p>
        <p>
          3 depending upon availability, all goods are dispatched as soon as
          possible. should the requested item be out of stock, we will ensure
          that it is delivered as soon as possible
        </p>
        <p>
          4 youmibeauty.com shall bear the risk of any damage, theft or loss of
          items during transport to the delivery address. this risk will be
          passed to the customer the moment he/she receives the delivery. upon
          delivery the customer should inspect the items to check for damage. if
          there is any damage, the product should not be used and should instead
          return them as set out in the returns policy.
        </p>
        <p>
          5 should the content of the package be opened, damaged or stolen, a
          replacement for the exact same product including prescription power as
          ordered according to the order confirmation will be provided after
          receiving a valid report from the courier company
        </p>
      </div>
    </div>
  );
}

export default ShippingPolicyContent
