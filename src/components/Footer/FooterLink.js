import React from 'react'
import { Link } from 'react-router-dom';

function FooterLink({text ,to}) {
  return <Link  to={to} className=" py-2 mb-1">{text}</Link>;
}

export default FooterLink
