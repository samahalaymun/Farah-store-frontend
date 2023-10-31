import React from 'react'
import InputWithIcon from '../Common/InputWithIcon';

function FooterTop() {
  return (
    <div className="py-4 footer">
      <div className="container-xl ">
        <div className="row align-items-center ">
          <div className="col-12 col-lg-5">
            <div className="footer-top-data d-flex gap-3 gap-md-4 align-items-center ">
              <img src={process.env.PUBLIC_URL +"/images/newsletter.png"} alt="newsletter" />
              <h3 className="text-white mb-0 ">Sign up for newsletter</h3>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <InputWithIcon
              icon="Subscribe"
              placeholder="Your email address"
              ClassName="footer-input-subscribe"
              iconClassName="footer-input-group-text "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop
