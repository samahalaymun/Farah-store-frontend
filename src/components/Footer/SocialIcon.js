import React from 'react'
import { Link } from 'react-router-dom';

function SocialIcon({children ,to}) {
  return (
    <div className="social-link ">
      <a className="text-white" href={to} target='_blank'>{children}</a>
    </div>
  );
}

export default SocialIcon
