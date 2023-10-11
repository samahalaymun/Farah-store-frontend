import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BsFillCarFrontFill } from "react-icons/bs";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { RiDoorLockLine } from "react-icons/ri";
import Carousel from "../Carousel/Carousel";
import ServiceSectionMobile from "./ServiceSectionMobile";
import "./ServiceSection.css";
function ServicesSection() {
  return (
    <section className="py-3 py-md-5 home-wrapper-2">
      <div className="container-xxl ">
        <div className="row  d-none d-md-flex">
          <div className="col-lg-3 col-md-6 col-12">
            <ServiceCard
              title="Free shipping"
              description="Free International shipping on all orders above 1000 NIS"
              icon={<BsFillCarFrontFill className="fs-1" />}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <ServiceCard
              title="support 24/7"
              description="Contact us 24 hours a day, 7 days a week"
              icon={<IoHelpBuoyOutline className="fs-1" />}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <ServiceCard
              title="7 days return"
              description="Simply return it within 7 days for an exchange."
              icon={<IoIosRefresh className="fs-1" />}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <ServiceCard
              title="100% PAYMENT SECURE"
              description="We ensure secure payment with PEV"
              icon={<RiDoorLockLine className="fs-1" />}
            />
          </div>
        </div>
        <ServiceSectionMobile />
      </div>
    </section>
  );
}

export default ServicesSection;
