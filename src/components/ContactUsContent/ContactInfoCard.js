import React from 'react'

function ContactInfoCard({info,icon}) {
  return (
    <span className="contact-info-card d-flex align-items-center gap-15">
      {icon}
      {info}
    </span>
  );
}

export default ContactInfoCard
