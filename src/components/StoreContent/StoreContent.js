import React from "react";
import "./StoreContent.css";
import ShowProducts from "./ShowProducts";
import Filters from "./Filters";

function StoreContent() {

  const onMobileFilterOpen=()=>{
      document.getElementsByClassName("filters")[0].style.left = "0px";
  }
    const onMobileFilterClose= () => {
        document.getElementsByClassName("filters")[0].style.left = "-100%";
    };
  return (
    <div className="store-wrapper py-4">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-lg-3">
            <Filters onToggle={onMobileFilterClose} />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <ShowProducts onFilterToggle={onMobileFilterOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreContent;
