import React from "react";

function Nav() {
  return (
    <div className="container-fluid nav d-flex sticky-top justify-content-center align-items-center p-0" data-aos="fade-down">
      <div className="row w-100">
        <div className="col-md-5 nav_left">
          <p className="p-0 m-3">An early stage founder program</p>
        </div>
        <div className="col-md-7 d-flex align-items-center justify-content-end">
          <p className="p-0 my-3 mx-4">Now accepting applications</p>
          <p className="p-0 my-3 mx-4">June 8 Deadline</p>
          <button className="btn-light btn mx-3">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;