import React from "react";

export default function Testimonials() {
  return (
    <div className="container-fluid mt-5 py-5">
      <div className="container">
        <div className="row  my-4 justify-content-center text-center" data-aos="fade-down">
            <h1>Testimonials</h1>
        </div>
        <div className="row" >
          <div className="col-md-6">
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
          </div>
          <div className="col-md-6">
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
            <Testimonial
                name="Siddharth Arugula"
                desg=" Account Manager to Associate Product "
                desg2="Manager at Cashflo"
                edu="Education background - B.tech In Biotech"
                img="/images/st1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonial({name, desg, desg2, edu, img}) {
  return (
    <div className="testmonial my-4" data-aos="fade-down">
      <div className="student_img" style={{backgroundImage:`url(${img})`}}></div>
      <div className="student_commments">
        <h3 className="student_name">{name}</h3>
        <p className="student_des">{desg}</p>
        <p className="student_des">{desg2}</p>
        <p className="student_des">{edu}</p>
      </div>
    </div>
  );
}
