import React from "react";
import course_1 from "../../assets/images/course-1.webp";
import course_2 from "../../assets/images/course-2.webp";
import course_3 from "../../assets/images/course-3.webp";
import course_4 from "../../assets/images/course-4.webp";
import course_5 from "../../assets/images/course-5.webp";
import course_6 from "../../assets/images/course-6.webp";


const index = () => {
  return (
    <section className="course" id="course">
      <p className="section-subtitle">What We Offer</p>

      <h2 className="section-title">
        Discover high-quality modules designed for success.
      </h2>

      <div className="course-grid">
        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_1} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">Basic</span>
              <span className="badge-tag blue">Fun Learning</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">Pre-Foundation</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Our modules offer a comprehensive understanding of the material,
                with experienced instructors who make learning fun and engaging.
                We foster critical thinking and problem-solving skills,
                preparing young learners for a successful academic career and a
                lifelong love of learning.
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">
                For Grade: 1<sup>st</sup> to 5<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_2} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">Learn with Passion</span>
              <span className="badge-tag blue">Academic Boost</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">Foundation</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Our modules are designed to enhance learning, boost confidence,
                and inspire academic excellence. Our engaging curriculum and
                expert instructors encourage creativity, collaboration, and
                independent thinking, giving students the skills they need to
                succeed in their future academic and professional endeavors.
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">
                For Grade: 6<sup>th</sup> to 10<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_3} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">Financial Literacy</span>
              <span className="badge-tag blue">Global Trade </span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">Commerce</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Our modules offer a comprehensive education in the fields of
                finance, accounting, and management, preparing students for
                success in the business world. With an engaging curriculum that
                emphasizes practical skills, we provide students with the knowledge
                and confidence they need to achieve their academic and
                professional goals.
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_4} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">STEM Education</span>
              <span className="badge-tag blue">Science Lab</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">PCM</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Our modules provide hands-on learning that prepares students for
                success in a fast-paced world. Expert instructors and practical
                curriculum develop critical thinking and problem-solving skills.
                Our engaging approach inspires a passion for STEM, helping
                students achieve their full potential.{" "}
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup> A-Group
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_5} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">Health Sciences</span>
              <span className="badge-tag blue">Medical Basics</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">PCB</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Our modules provide an exceptional education that equips
                students with practical skills needed to thrive in the dynamic
                and challenging field of healthcare. With a focus on medical
                theory and hands-on learning, inspires a passion for medicine
                and helps students to become compassionate medical
                professionals.
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup> B-Group
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="course-banner">
            <img loading="lazy" decoding="async" src={course_6} alt="course banner" />

            <div className="course-tag-box">
              <span className="badge-tag orange">Intensive Training</span>
              <span className="badge-tag blue">Quick Learning</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="card-title">
              <a href="#course">Crash Course</a>
            </h3>

            <div className="wrapper border-bottom">
              <p className="author-name">
                Maximize your learning potential with our crash courses. Led by
                experts and customized to your goals, our intensive courses
                provide the knowledge and skills you need to succeed. With our
                focused approach, you'll achieve your learning goals in record
                time. Take the fast track to success with our crash courses.
              </p>
            </div>

            <div className="wrapper">
              <div className="course-price">For Everyone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
