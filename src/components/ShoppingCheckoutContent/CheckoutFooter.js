import React from "react";
import FooterLink from "../Footer/FooterLink";
import SocialIcon from "../Footer/SocialIcon";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { Link } from "react-router-dom";

function CheckoutFooter() {
  return (
    <div className="w-100 flex-wrap checkout-footer d-flex align-items-center ">
        <FooterLink text="Privacy Policy" to="/privacy-policy" />
        <FooterLink text="Refund Policy" to="/refund-policy" />
        <FooterLink text="Shipping Policy" to="/shipping-policy" />
  
    </div>
  );
}

export default CheckoutFooter;
