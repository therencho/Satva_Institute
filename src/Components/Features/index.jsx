import React from "react";
import feature_icon_1 from "../../assets/images/feature-icon-1.png";
import feature_icon_2 from "../../assets/images/feature-icon-2.png";
import feature_icon_3 from "../../assets/images/feature-icon-3.png";
import coure_features_img from "../../assets/images/coure-features-img.webp";

const index = () => {
  return (
    <section className="features">
      <div className="features-left">
        <p className="section-subtitle">Our Mission</p>

        <h2 className="section-title">Enriching Minds, Changing Lives</h2>

        <ul>
          <li className="features-item">
            <div className="item-icon-box blue">
              <img loading="lazy" decoding="async"
                src={feature_icon_1}
                alt="feature icon"
              />
            </div>

            <div className="wrapper">
              <h3 className="item-title">Empowering Lifelong Learning</h3>

              <p className="item-text">
              Empower individuals to achieve their full potential through lifelong learning, offering innovative and accessible educational programs that foster personal and professional growth.
              </p>
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon-box pink">
              <img loading="lazy" decoding="async"
                src={feature_icon_2}
                alt="feature icon"
              />
            </div>

            <div className="wrapper">
              <h3 className="item-title">Advancing Knowledge and Innovation</h3>

              <p className="item-text">
              Advance knowledge and innovation through cutting-edge research, teaching, and engagement, preparing the next generation of leaders to address the world's most pressing challenges.
              </p>
            </div>
          </li>

          <li className="features-item">
            <div className="item-icon-box purple">
              <img loading="lazy" decoding="async"
                src={feature_icon_3}
                alt="feature icon"
              />
            </div>

            <div className="wrapper">
              <h3 className="item-title">Transforming Lives Through Education</h3>

              <p className="item-text">
              Transform lives through education, promoting social mobility and economic growth by providing students with the tools and opportunities they need to succeed in an ever-changing world.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="features-right">
        <img loading="lazy" decoding="async"
          src={coure_features_img}
          alt="core features "
        />
      </div>
    </section>
  );
};

export default index;
