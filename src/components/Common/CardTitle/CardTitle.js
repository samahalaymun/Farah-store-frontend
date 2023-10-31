import React from 'react';
import "./CardTitle.css";

function CardTitle({ title, className }) {
  return <h3 className={className}>{title}</h3>;
}

export default CardTitle
