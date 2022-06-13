import React from "react";

export default function Header() {
  return (
    <div className="container-fluid header d-flex align-items-center justify-content-center">
      <div className="container d-flex flex-column align-items-center py-5 text-center">
        <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="200">
          <div className="col-md-6">
            <h1>ExtraHike</h1>
            <br />
            <h2>
              We train future product managers. We invest in you and pair you
              with top product managers to help with growth, products, and
              marketing.
            </h2>
          </div>
        </div>
        <div className="row w-100 justify-content-center mt-5" data-aos="fade-down" data-aos-delay="400">
          <div className="header_bottom col-md-6">
            <div className="row py-4">
              <div className="col-md-4">Application Fee- INR 50,000</div>
              <div className="col-md-4">Duration - 16 week</div>
              <div className="col-md-4">Eligibility: Less than 3 years of work experience</div>
            </div>
          </div>
        </div>
        <div className="row w-100 justify-content-center mt-5" data-aos="fade-down" data-aos-delay="600">
          <div className="col-md-6">
            <p><strong>Mission:</strong> To pave the way to a promising future in which only one's ability, skills, and commitment matter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
