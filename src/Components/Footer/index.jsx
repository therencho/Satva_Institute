import React from "react";

const index = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="grid-item">
          <div className="footer-logo">
            <h2 className="satva-institute-text">Satva Institute </h2>
          </div>

          <p className="footer-text">
            Unlock your potential with Satva Institute - your guide to success
            through personalized coaching and mentorship
          </p>

          <div className="social-link">
            <a href="https://www.facebook.com/Satvaclasses">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/satvainstitute/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://twitter.com/SatvaInstitute">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.youtube.com/@satvainstitute4296">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
        </div>

        <ul className="grid-item">
          <h4 className="item-heading">Our Link</h4>

          <li className="list-item">
            <a href="#home">Home</a>
          </li>

          <li className="list-item">
            <a href="#about">About Us</a>
          </li>

          <li className="list-item">
            <a href="#course">Courses</a>
          </li>

          <li className="list-item">
            <a href="#blog">Blog</a>
          </li>

          <li className="list-item"></li>
        </ul>

        <ul className="grid-item">
          <h4 className="item-heading">Main Branch</h4>

          <li className="list-item">
            <p>
              <a
                href="https://www.google.com/maps/dir/22.4090495,71.2042617/satva+institute/@22.337168,70.5783758,8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395c2bc3d56b1057:0x3c28a00bd16c28c9!2m2!1d72.6322216!2d23.1849969"
                rel="noopener"
                target="_blank"
              >
                345, 346, 347 Pramukh Mastana
                <br />
                Kudasan, Gandhinagar, 382431{" "}
              </a>
            </p>
          </li>

          <li className="list-item">
            {" "}
            <p>
              <a href="tel:+919909089244">+91 99090 89244</a>
            </p>
          </li>
          <li className="list-item">
            {" "}
            <p>
              <a href="mailto:inquiry@satvainstitute.com">
                inquiry@satvainstitute.com
              </a>
            </p>
          </li>
        </ul>

        <div className="grid-item">
          <h4 className="item-heading">Second Branch</h4>

          <li className="list-item">
            <p>
              <a
                href="https://goo.gl/maps/ZUuzTuSwcpd4RpUo6"
                rel="noopener"
                target="_blank"
              >
                Talent Plus Academy, Behind Nirma University
                <br />
                Tragad, New Chandkheda, Ahmedabad - 382470{" "}
              </a>
            </p>
          </li>

          <li className="list-item">
            {" "}
            <p>
              <a href="tel:+917990696242">+91 79906 96242</a>
            </p>
          </li>
          <li className="list-item">
            {" "}
            <p>
              <a href="mailto:inquiry@satvainstitute.com">
                inquiry@satvainstitute.com
              </a>
            </p>
          </li>
        </div>
      </div>

      <p className="copyright">
        Copyright © {new Date().getFullYear()} <a href="https://therencho.com/">The Rencho</a>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default index;
