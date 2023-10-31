import React from 'react'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import { BsTelephone } from 'react-icons/bs';
import {BiTimeFive} from "react-icons/bi";
import ContactInfoCard from './ContactInfoCard';

function ContactUsForm() {
  return (
    <div className="contact-inner-wrapper">
      <div className="contact-form ">
        <h3 className="contact-title mb-4">Contact</h3>
        <form className="d-flex flex-column gap-20">
          <div>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="4"
              className="form-control"
              placeholder="Comments"
            />
          </div>
          <div>
            <button className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <h3 className="contact-title mb-4">Get in touch with us</h3>
        <div className="d-flex flex-column gap-20">
          <p className="mb-0">
            Feel free to contact us if you have any questions or feedback about
            your order or our products and we'll get back to you as soon as
            possible.
          </p>
          <ContactInfoCard
            icon={<AiOutlineHome />}
            info="Farah Store, Rafeedia Street, Nablus, Palestine."
          />
          <ContactInfoCard icon={<BsTelephone />} info="+972599753342" />
          <ContactInfoCard
            icon={<AiOutlineMail />}
            info=" info@farahstore.com"
          />
          <ContactInfoCard icon={<BiTimeFive />} info=" Everyday 9:00 am-10:00 pm" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm
