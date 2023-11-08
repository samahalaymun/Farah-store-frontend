import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BsFillCarFrontFill } from "react-icons/bs";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { RiDoorLockLine } from "react-icons/ri";
import ServiceSectionMobile from "./ServiceSectionMobile";
import "./ServiceSection.css";
import { services } from "../../Utils/Data";
function ServicesSection() {
  return (
    <section className="py-3 py-md-4 home-wrapper-2">
      <div className="container-xxl ">
        <div className="row  d-none d-md-flex">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6 col-12">
              <ServiceCard
                title={service.title}
                description={service.tagLine}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        <ServiceSectionMobile />
      </div>
    </section>
  );
}

export default ServicesSection;
