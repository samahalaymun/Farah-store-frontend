import React from 'react'
import "./ContactUsContent.css";
import ContactUsForm from './ContactUsForm';

function ContactUsContent() {
  return (
    <div className="contact-wrapper py-4">
      <div className="container-xxl ">
        <div className="row gap-15">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27001.95776114419!2d35.281841989160164!3d32.22457659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1c5527db657%3A0x84061073ac585645!2sFarah%2055!5e0!3m2!1sar!2s!4v1698603476687!5m2!1sar!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              className='border-0 '
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='col-12'>
           <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsContent
