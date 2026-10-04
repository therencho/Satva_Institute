import React from "react";
import  instructor_1  from "../../assets/images/instructor-1.webp";
import  instructor_2  from "../../assets/images/instructor-2.webp";
import  instructor_3  from "../../assets/images/instructor-3.webp";
import  instructor_4  from "../../assets/images/instructor-4.webp";

const index = () => {
  return (
    <section className="instructor" id="instructor">
      <p className="section-subtitle">Best Coach</p>

      <h2 className="section-title">Our Expert Instructor</h2>

      <div className="instructor-grid">
        <div className="instructor-card">
          <div className="instructor-img-box">
            <img loading="lazy" decoding="async"
              src={instructor_1}
              alt="instructor Mitul"
            />

            <div className="social-link">
              <a href="#" className="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a href="#" className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href="#" className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>

          <h4 className="instructor-name">Mitul</h4>

          <p className="instructor-title">Director</p>
        </div>

        <div className="instructor-card">
          <div className="instructor-img-box">
            <img loading="lazy" decoding="async"
              src={instructor_2}
              alt="instructor Biren"
            />

            <div className="social-link">
              <a href="#" className="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a href="#" className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href="#" className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>

          <h4 className="instructor-name">Biren</h4>

          <p className="instructor-title">Tutor</p>
        </div>

        <div className="instructor-card">
          <div className="instructor-img-box">
            <img loading="lazy" decoding="async"
              src={instructor_3}
              alt="instructor Helly"
            />

            <div className="social-link">
              <a href="#" className="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a href="#" className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href="#" className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>

          <h4 className="instructor-name">Helly</h4>

          <p className="instructor-title">Tutor</p>
        </div>

        <div className="instructor-card">
          <div className="instructor-img-box">
            <img loading="lazy" decoding="async"
              src={instructor_4}
              alt="instructor Rencho"
            />

            <div className="social-link">
              <a href="#" className="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a href="#" className="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href="#" className="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>

          <h4 className="instructor-name">Rencho</h4>

          <p className="instructor-title">Instructor</p>
        </div>
      </div>
    </section>
  );
};

export default index;
