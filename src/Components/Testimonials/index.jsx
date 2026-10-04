import React from "react";
import quote  from '../../assets/images/quote.png';
import Client  from '../../assets/images/client.webp';

const index = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-left">
        <p className="section-subtitle">Testimonial</p>

        <h2 className="section-title">What Our Students Say About Us</h2>

        <p className="section-text">
        We're proud of the success our students have achieved. Our commitment to providing quality education and individualized support has helped our students to excel in their academic pursuits. We believe that every student has the potential to succeed, and it's our privilege to be part of their journey towards a bright future.
        </p>
      </div>

      <div className="testimonials-right">
        <div className="testimonials-card">
          <img loading="lazy" decoding="async"
            src={quote}
            alt="quote icon"
            className="quote-img"
          />

          <p className="testimonials-text">
            "I had a fantastic experience with Satva Institute. The instructors were extremely knowledgeable and supportive, and the curriculum was challenging yet engaging. Thanks to Satva Institute, I was able to achieve my academic goals and prepare for my future career. I highly recommend this institute to any student looking to succeed in their studies!".
          </p>

          <div className="testimonials-client">
            <div className="client-img-box">
              <img loading="lazy" decoding="async"
                src={Client}
                alt="client christine rose"
              />
            </div>

            <div className="client-detail">
              <h4 className="client-name">Priyal Shah</h4>

              <p className="client-title">Student</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default index;
