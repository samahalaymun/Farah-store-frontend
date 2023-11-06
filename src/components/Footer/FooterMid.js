import React from 'react'
import SocialIcon from './SocialIcon';
import { FaSnapchat } from "react-icons/fa";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import FooterLink from './FooterLink';
import FooterLinkHeader from './FooterLinkHeader';
function FooterMid() {
  return (
    <div className="py-4 footer">
      <div className="container-xxl ">
        <div className="row flex-wrap d-flex">
          <div className="col-12 col-lg-3 col-md-6 p-4 text-white footer-links-wrapper ">
            <FooterLinkHeader text="Contact Us" />
            <div className="footer-links d-flex flex-column ">
              <FooterLink text="Demo Store" />
              <address className=" py-2 mb-1">
                Rafedia Street, Nablus, Palestine
              </address>
              <a href="tel:+972599753342" className=" py-2 mb-1">
                +972599753342
              </a>
              <a
                href="mailto:samah.abu.laimun@gmail.com"
                className="text-white py-2 mb-1"
              >
                samah.abu.laimun@gmail.com
              </a>
              <div className="social-links d-flex gap-30 mt-4">
                <SocialIcon to="https://www.facebook.com/farahaccessorie">
                  <BsFacebook />
                </SocialIcon>
                <SocialIcon to="https://www.instagram.com/f55byfarah/">
                  <BsInstagram />
                </SocialIcon>
                <SocialIcon to="/">
                  <FaSnapchat />
                </SocialIcon>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 p-4 text-white footer-links-wrapper">
            <FooterLinkHeader text="Information" />
            <div className="footer-links d-flex flex-column ">
              <FooterLink text="Privacy Policy" to="/privacy-policy" />
              <FooterLink text="Refund Policy" to="/refund-policy" />
              <FooterLink text="Shipping Policy" to="/shipping-policy" />
              <FooterLink text="Blogs" to="/blogs" />
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 p-4 text-white footer-links-wrapper">
            <FooterLinkHeader text="Account" />
            <div className="footer-links d-flex flex-column ">
              <FooterLink text="Search" />
              <FooterLink text="About Us" to="/about" />
              <FooterLink text="Faq" />
              <FooterLink text="Contact" to="/contact" />
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 p-4 text-white footer-links-wrapper">
            <FooterLinkHeader text="Quick Links" />
            <div className="footer-links d-flex flex-column ">
              <FooterLink text="Accessories" />
              <FooterLink text="Shoes" />
              <FooterLink text="Bags" />
              <FooterLink text="Corset" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMid
