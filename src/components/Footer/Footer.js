import React from 'react'
import '../Footer/Footer.css'
import '../../App.css'
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import FooterMid from './FooterMid';
const Footer = () => {
  return (
    <>
      <footer>
        <FooterTop />
        <FooterMid />
       <FooterBottom />
      </footer>
    </>
  );
}

export default Footer
