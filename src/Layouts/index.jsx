import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/svg/Satva-logo.png";

function Index({ openSide, setOpenSide }) {
  let [open, setOpen] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ooaqruc",
        "template_3f8bzed",
        form.current,
        "P2xUMdYbigeM80fla"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Thank you! Your message was sent successfully.");
        },
        (error) => {
          console.log(error.text);
          form.current.reset();
          alert(error.text);
        }
      );
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={logo} alt="Educator Logo" width="100" />
          </div>

          <ul className={open ? "navbar-nav active" : "navbar-nav "}>
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#course">Courses</a>
            </li>
            <li className="nav-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <a href="#" alt="contact">
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => setOpenSide(!openSide)}
            >
              <p className="btn-text">Message Us</p>
              <span className="square"></span>
            </button>
          </a>

          <button
            className={open ? "nav-toggle-btn active" : "nav-toggle-btn "}
            onClick={() => setOpen(!open)}
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </nav>
      </header>

      {/* drawer  */}
      <div
        id="drawer-right-example"
        className={`${
          openSide ? "drawer-80" : "drawer-0"
        } transition-all duration-500`}
      >
        <h5 id="titleOfSidebar">Contact Us</h5>

        <button
          type="button"
          id="closeBtn"
          onClick={() => setOpenSide(!openSide)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          {/* <span className="sr-only">Close menu</span> */}
        </button>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <section className="bg-white">
            <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
              <h2 className="py-4 section-title-for-contact-page">
                Contact Us
              </h2>
              <p className="section-text">Have a question? Send us a message and we will get back to you.</p>
              <form className="space-y-8" ref={form} onSubmit={sendEmail}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mt-2 mb-2 text-sm font-medium text-gray-900 section-text dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@satvainstitute.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mt-2 mb-2 text-sm font-medium text-gray-900 section-text dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="user_subject"
                    name="user_subject"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mt-2 mb-2 text-sm font-medium text-gray-900 section-text dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="my-4 btn btn-primary"
                  // onClick={() => setOpenSide(!openSide)}
                >
                  <p className="btn-text">Submit</p>
                  <span className="square"></span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Index;
