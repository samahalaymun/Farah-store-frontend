import React from 'react'
import Meta from '../components/Meta/Meta';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ContactUsContent from '../components/ContactUsContent/ContactUsContent';

function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <ContactUsContent />
    </>
  );
}

export default Contact
