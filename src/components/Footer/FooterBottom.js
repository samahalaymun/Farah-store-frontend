import React from 'react'

function FooterBottom() {
  return (
    <div className="py-4 footer">
      <div className="container-xl ">
        <div className="row">
          <div className="col-12  ">
            <p className="text-center text-white">
              &copy; {new Date().getFullYear()}; Powered by Farah Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom
