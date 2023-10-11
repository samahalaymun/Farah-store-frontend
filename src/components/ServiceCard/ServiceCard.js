import React from 'react'
import './ServiceCard.css'
import { BsFillCarFrontFill } from 'react-icons/bs';
function ServiceCard({title ,description,icon}) {
  return (
    <div className="service-card d-flex align-items-center gap-15">
      {icon}
      <div className="service-content">
        <h6>{title}</h6>
        <p className='mb-0'>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard
