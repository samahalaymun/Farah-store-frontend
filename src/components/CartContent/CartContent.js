import React from "react";
import "./CartContent.css";
import CartHeader from "./CartHeader";
import CartData from "./CartData";
import { Link } from "react-router-dom";
import CartFooter from "./CartFooter";

function CartContent() {
  return (
    <section className="cart-wrapper py-4">
      <div className="container-xxl ">
        <CartHeader />
        <CartData />
        <div className="py-2 mt-4">
            <Link className="btn-primary" to="/store">Continue To Shopping</Link>
        </div>
        <CartFooter total={32200} />
      </div>
    </section>
  );
}

export default CartContent;
