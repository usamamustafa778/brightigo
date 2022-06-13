import React from "react";

export default function Pricing() {
  return (
    <div className="container-fluid pricing d-flex align-items-center justify-content-center">
      <div className="container ">
      <div className="row align-items-center">
        <div className="col-md-4" data-aos="zoom-in">
          <h1>Our tuition fee is not a hassle!</h1>
          <h5>No Job = No Fees.</h5>
        </div>

        {/* Price Box 1 */}
        <div className="col-md-4" data-aos="fade-down">
          <div className="price_box p-4">
            <h2>Pay after placement!</h2>
            <h6>All graduating after 2018 are eligible</h6>
            <div className="placement_box row mt-4">
              <div className="col-md-12">
                <h5>Placement</h5>
                <h4>5 - 10 lacs</h4>
              </div>
              <div className="col-md-12 mt-4">
                <h5>You Pay</h5>
                <h4>₹10,000 / month</h4>
                <p>₹1.2 lacs + GST</p>
                <p>Over 12 months</p>
              </div>
            </div>
            <button className="btn btn-light w-100 mt-4 py-3">Enroll Now</button>
          </div>
        </div>
        
        {/* Price Box 2 */}
        <div className="col-md-4" data-aos="fade-down" data-aos-delay="200">
          <div className="price_box p-4">
            <h2>Pay upfront!</h2>
            <h6>100% job guarantee</h6>
            <div className="placement_box row mt-4">
              <div className="col-md-12">
                <h5>Start at as low as</h5>
                <h1>₹4,199</h1>
                <p>+GST per month</p>
                <p>Total ₹49,999 +GST</p>
                 
                 <ul className="mt-2">
                  <li>100% Money back guarantee.</li>
                  <li>All graduation years eligible</li>
                 </ul>
              </div>
            </div>
            <button className="btn btn-light w-100 mt-4 py-3">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
