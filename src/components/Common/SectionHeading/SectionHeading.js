import React from 'react';

import "./SectionHeading.css"

function SectionHeading({header}) {
  return (
    <div className="section-heading">
      <h3>{header}</h3>
    </div>
  );
}

export default SectionHeading
