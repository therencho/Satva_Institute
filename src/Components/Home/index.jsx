import React from "react";

import shape_1 from "../../assets/svg/shape-1.svg";
import shape_2 from "../../assets/svg/shape-2.svg";
import shape_3 from "../../assets/svg/shape-3.svg";
import shape_4 from "../../assets/svg/shape-4.svg";

import banner_line from "../../assets/svg/banner-line.svg";

import banner_img_bg from "../../assets/svg/banner-img-bg.svg";
import banner_img from "../../assets/images/banner-img.webp";

import banner_aliment_icon_1 from "../../assets/svg/banner-aliment-icon-1.svg";
import banner_aliment_icon_2 from "../../assets/images/banner-aliment-icon-2.png";
import banner_aliment_icon_3 from "../../assets/svg/banner-aliment-icon-2.svg";
import banner_aliment_icon_4 from "../../assets/images/banner-aliment-icon-4.png";

const index = ({ openSide, setOpenSide }) => {
  return (
    <section className="home" id="home">
      <div className="deco-shape shape-1">
        <img src={shape_1} alt="art shape" width="70" />
      </div>
      <div className="deco-shape shape-2">
        <img src={shape_2} alt="art shape" width="55" />
      </div>
      <div className="deco-shape shape-3">
        <img src={shape_3} alt="art shape" width="120" />
      </div>
      <div className="deco-shape shape-4">
        <img src={shape_4} alt="art shape" width="30" />
      </div>

      <div className="home-left">
        <p className="section-subtitle">Welcome To Satva Institute</p>

        <h1 className="main-heading">
          Creating a brighter future through{" "}
          <span className="underline-img">
            Education <img src={banner_line} alt="line" />
          </span>
        </h1>

        <p className="section-text">
          We are committed to providing a world-class education to students of
          all ages. Our experienced faculty and state-of-the-art facilities
          create a dynamic and engaging learning environment. Explore our
          programs and resources to find out how we can support your academic
          journey. Join us and discover the limitless potential of education.
        </p>

        <div className="home-btn-group">
          <a href="#course">
            <button className="btn btn-primary">
              <p className="btn-text">Explore Courses</p>
              <span className="square"></span>
            </button>
          </a>
          <button
            className="btn btn-secondary"
            onClick={() => setOpenSide(!openSide)}
          >
            <p className="btn-text">Contact Us</p>
            <span className="square"></span>
          </button>
        </div>
      </div>

      <div className="home-right">
        <div className="img-box">
          <img
            src={banner_img_bg}
            alt="colorful background shape"
            className="background-shape"
          />
          <img src={banner_img} alt="banner" className="banner-img" />

          <img
            src={banner_aliment_icon_1}
            alt=""
            className="icon-1 smooth-zigzag-anim-1"
            width="250"
          />
          <img
            src={banner_aliment_icon_2}
            alt=""
            className="icon-2 smooth-zigzag-anim-2"
            width="240"
          />
          <img
            src={banner_aliment_icon_3}
            alt=""
            className="icon-3 smooth-zigzag-anim-3"
            width="240"
          />
          <img
            src={banner_aliment_icon_4}
            alt=""
            className="icon-4 drop-anim"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
