import React from "react";
import cta_bg_img from "../../assets/images/Screenshot__3_-removebg-preview.webp";
const index = ({ openSide, setOpenSide }) => {
  return (
    <section className="contact">
      <div className="contact-card" id="contact">
        <img loading="lazy" decoding="async" src={cta_bg_img} alt="shape" className="contact-card-bg" />

        <h2>Start Your Learning Journey With Us</h2>

        <button className="btn btn-primary" onClick={() => setOpenSide(!openSide)}>
          <p className="btn-text">Contact Us</p>
          <span className="square"></span>
        </button>
      </div>
    </section>
  );
};

export default index;
