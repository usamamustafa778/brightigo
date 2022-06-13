import React from "react";

export default function Learn() {
  return (
    <div className="container-fluid learn">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center learn_header d-flex flex-column align-items-center">
        <h1 data-aos="fade-down">Work on real-world product challenges</h1>
        <p data-aos="fade-down" data-aos-delay="100">
          Build your skills by working on real-world problems faced by
          companies, add experience to your resume, and get hired. Companies
          review your challenges and your performance. Do the challenges, add to
          your experience and resume and land more interviews.
        </p>
        </div>
      </div>
      <div className="products mt-4" data-aos="fade-down">
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
        <Prodcut
            title="Flipkart"
            img="/images/icons/flipkart.jpeg"
            titleDes="How would handle negative user feedback."
            productDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aspernatur eveniet ratione dolore, excepturi modi saepe maxime quis. Iure tempore, autem iusto explicabo facilis voluptatum"
        />
      </div>
    </div>
  );
}

function Prodcut({ title, img, titleDes, productDes }) {
  return (
    <div className="product_box p-4">
      <div className="product-title d-flex align-items-center">
        <img className="product_img" src={img} alt="" />
        <h3 className="mx-2">{title}</h3>
      </div>
      <h5 className="title_des my-3">{titleDes}</h5>
      <p className="product_des">{productDes}</p>
    </div>
  );
}
