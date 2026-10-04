import React, { useState } from "react";
import about_img_bg from "../../assets/svg/bg-image.webp";
import about_img from "../../assets/images/about-img.webp";
import banner_aliment_icon_1 from "../../assets/svg/banner-aliment-icon-1.svg";
import banner_aliment_icon_3 from "../../assets/svg/banner-aliment-icon-2.svg";
import Card from "./Card";

const index = () => {
  const [modal, setModal] = useState(false);

  const content = `<h2>Start Early and Create a Study Plan</h2>

  <p>One of the most important tips for preparing for competitive exams is to start early and create a study plan. Starting early gives you ample time to cover all the topics and revise them thoroughly. A study plan can help you stay organized and on track, and ensure that you cover all the necessary topics before the exam.</p>
  
  <p>At Satva Institute, we offer customized study plans that are tailored to each student's unique needs and goals. Our experienced faculty members work closely with students to create a study plan that works best for them. We also provide students with access to study materials and resources that can help them prepare effectively. </p>
  
  <h2>Time Management</h2>
  
  <p>Time management is crucial when preparing for competitive exams. It is important to allocate time for each subject or topic, and practice time management when answering questions during the exam. This can help you complete the exam within the given time frame and avoid running out of time.</p>
  
  <p>At Satva Institute, we offer time management workshops that teach students effective time management strategies. Our faculty members also provide guidance on how to pace themselves during the exam, and how to manage their time when answering different types of questions.</p>
  
  <h2>Practice and Mock Tests</h2>
  
  <p>Practice and mock tests are a crucial part of preparing for competitive exams. They help students become familiar with the format of the exam, identify their strengths and weaknesses, and build their confidence.</p>
  
  
  <p>At Satva Institute, we provide students with access to a range of practice and mock tests that are designed to simulate the real exam experience. Our faculty members also provide personalized feedback and guidance based on the student's performance in the mock tests.</p>
  
  <h2>Stress Management</h2>
  
  <p>Preparing for competitive exams can be stressful, but it is important to manage stress effectively to avoid burnout and ensure optimal performance. Some effective stress management strategies include meditation, exercise, and talking to a counselor or coach.</p>
  
  
  <p>At Satva Institute, we offer stress management workshops and counseling services to help students manage their stress and anxiety. Our experienced faculty members provide guidance on mindfulness, relaxation techniques, and other strategies that can help students stay calm and focused during the exam.</p>
  
  <h2>Conclusion</h2>
  
  <p>Preparing for competitive exams can be challenging, but with the right preparation and strategies, students can increase their chances of success. At Satva Institute, we are committed to helping students prepare for competitive exams and achieve their academic and career goals. Our customized study plans, time management workshops, practice and mock tests, and stress management services are designed to help students prepare effectively and confidently for their exams. If you are looking for assistance in preparing for a competitive exam, contact Satva Institute today to learn more about our services.</p>
  `;
  return (
    <>
      <section className="about" id="about">
        <div className="about-left">
          <div className="img-box">
            <img loading="lazy" decoding="async" src={about_img_bg} alt="about bg" className="about-bg" />

            <img loading="lazy" decoding="async" src={about_img} alt="about person" className="about-img" />

            <img loading="lazy" decoding="async"
              src={banner_aliment_icon_1}
              alt=""
              className="icon-1 smooth-zigzag-anim-1"
              width="250"
            />
            <img loading="lazy" decoding="async"
              src={banner_aliment_icon_3}
              alt=""
              className="icon-2 smooth-zigzag-anim-3"
              width="240"
            />
          </div>
        </div>

        <div className="about-right">
          <p className="section-subtitle">About Us</p>

          <h2 className="section-title">Unlock your academic potential with us.</h2>

          <p className="section-text">
            Satva Institute is a structured academy complete in all aspects
            which provides quality guidance for
            6th to 12th standards in CBSE/GSEB/ICSE Board
            (English Medium+ગુજરાતી માધ્યમ)
          </p>

          <ul className="about-ul">
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>
                Unlock your academic potential with personalized coaching and
                guidance from experienced faculty.
              </p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>
                We believe every student has the potential to succeed, and we're
                here to help you unlock it.
              </p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>
                Join our community of learners, mentors, and leaders and
                discover your full potential.
              </p>
            </li>
          </ul>

          <button className="btn btn-primary" onClick={() => setModal(!modal)}>
            <p className="btn-text">Know More</p>
            <span className="square"></span>
          </button>
        </div>
      </section>
      <Card modal={modal} content={content} setModal={setModal} />
    </>
  );
};

export default index;
