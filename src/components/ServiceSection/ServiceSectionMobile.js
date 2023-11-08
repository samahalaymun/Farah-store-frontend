import React from "react";
import Carousel from "../Carousel/Carousel";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BsFillCarFrontFill } from "react-icons/bs";
import { RiDoorLockLine } from "react-icons/ri";
import { IoIosRefresh } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { services } from "../../Utils/Data";

function ServiceSectionMobile() {
  return (
    <div className="mobile-services-carousel d-md-none">
      <Carousel>
        {services.map((service, index) => {
          return (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <ServiceCard
                title={service.title}
                description={service.tagLine}
                icon={service.icon}
              />
            </div>
          );
        })}
        {/* <div className="carousel-item active">
          <ServiceCard
            title="Free shipping"
            description="Free International shipping on all orders above 1000 NIS"
            icon={<BsFillCarFrontFill className="fs-1" />}
          />
        </div>
        <div className="carousel-item ">
          <ServiceCard
            title="support 24/7"
            description="Contact us 24 hours a day, 7 days a week"
            icon={<IoHelpBuoyOutline className="fs-1" />}
          />
        </div>
        <div className="carousel-item ">
          <ServiceCard
            title="7 days return"
            description="Simply return it within 7 days for an exchange."
            icon={<IoIosRefresh className="fs-1" />}
          />
        </div>
        <div className="carousel-item ">
          <ServiceCard
            title="100% PAYMENT SECURE"
            description="We ensure secure payment with PEV"
            icon={<RiDoorLockLine className="fs-1" />}
          />
        </div> */}
      </Carousel>
    </div>
  );
}

export default ServiceSectionMobile;
