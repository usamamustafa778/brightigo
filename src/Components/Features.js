import React from "react";

export default function Features() {
  return (
    <div className="container-fluid">
      <div className="container features">
      <div className="row justify-content-center w-100" data-aos="fade-down">
        <div className="col-md-7 py-4 text-center">
          <h1>The Features of Product Management Bootcamp</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Feature
            img="/images/features/f (7).jpg"
            title="Learn how to build"
            des="What good is your knowledge acquired through watching endless videos
                and listening to “experts” if you cannot practice and apply it in
                everyday life!"
          />
          <FeatureRight
            img="/images/features/f (6).jpg"
            title="A large and lively
            student community"
            des="Even though you might be sitting at your computer at home, you’ve got thousands of friends going through the same challenges."
          />
          <Feature
            img="/images/features/f (5).jpg"
            title="Career Support along the way"
            des="We only succeed when you do - that's why an important part of Brightigo's curriculum is focused on getting you hired. You'll get regular career mentoring and complete weekly career-readiness assignments so you can enter the job marker confident and prepared."
          />
          <FeatureRight
            img="/images/features/f (4).jpg"
            title="Brightigo courses"
            des="Extreme focus on practical frameworks in all our courses. Entire subject matter is comprehensively covered and all tips, tricks and frameworks get covered. Post our courses, you won’t need anything additional to go through."
          />
          <Feature
            img="/images/features/f (3).jpg"
            title="Real-world case studies"
            des="We emphasise heavily on hands on learning by solving real world case studies. Modern professionals need hands-on practical skills and not pure theoretical concepts."
          />
          <FeatureRight
            img="/images/features/f (2).jpg"
            title="Gain real-world experience,
            get more interviews."
            des="Companies review your challenges and your performance. Do the challenges, add to your experience and resume and land more interviews."
          />
          <Feature
            img="/images/features/f (1).jpg"
            title="Work with others and
            build your network."
            des="Form a team, make friends, work on challenges, and rate and review other challenge submissions."
          />
        </div>
      </div>
    </div>
    </div>
  );
}

function Feature({ img, title, des }) {
  return (
    <div className="row mt-4" data-aos="fade-down" data-aos-delay="200">
      <div className="col-md-7 feature">
        <img src={img} className="w-100" alt="" />
        <div className="feature_des">
          <h2>{title}</h2>
          <p> {des} </p>
        </div>
      </div>
    </div>
  );
}

function FeatureRight({ img, title, des }) {
  return (
    <div className="row mt-4 justify-content-end" data-aos="fade-down" data-aos-delay="200">
      <div className="col-md-7 feature">
        <img src={img} className="w-100" alt="" />
        <div className="feature_des">
          <h2>{title}</h2>
          <p> {des} </p>
        </div>
      </div>
    </div>
  );
}
