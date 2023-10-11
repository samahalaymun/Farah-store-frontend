import React from 'react'
import { Link } from 'react-router-dom';

function FooterLink({text}) {
  return <Link className="text-white py-2 mb-1">{text}</Link>;
}

export default FooterLink