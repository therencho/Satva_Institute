import React,{useState} from "react";
import Header from "./Layouts/index";
import Home from "./Components/Home/index";
import CourseCategory from "./Components/CourseCategory/index";
import AboutUs from "./Components/AboutUs/index";
import Course from "./Components/Course/index";
import Event from "./Components/Event/index";
import Features from "./Components/Features/index";
import Instructor from "./Components/Instructor/index";
import Testimonials from "./Components/Testimonials/index";
import FAQSection from "./Components/FAQSection/FAQSection";

import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/index";
import Footer from "./Components/Footer/index";

function App() {
  const [openSide, setOpenSide] = useState(true);

  return (
    <div className="container">
      <Header openSide={openSide} setOpenSide={setOpenSide}/>
      <Home openSide={openSide} setOpenSide={setOpenSide}/>
      <CourseCategory />
      <AboutUs />
      <Course />
      <Event />
      <Features />
      <Instructor />
      <Testimonials />
      <FAQSection/>
      <Blogs />
      <ContactUs openSide={openSide} setOpenSide={setOpenSide}/>
      <Footer />
    </div>
  );
};


export default App;
