import React from "react";
import event_img from "../../assets/images/event-img.webp";

const index = () => {
  return (
    <section className="event" id="event">
      <div className="event-left">
        <div className="event-banner">
          <img loading="lazy" decoding="async" src={event_img} alt="event banner" className="banner-img" />
        </div>

        <a href="https://www.youtube.com/watch?v=XSrPFlBjToI" target='_blank'>
          <button className="play smooth-zigzag-anim-1">
            <div className="play-icon pulse-anim">
              <ion-icon name="play-circle"></ion-icon>
            </div>

            <p>Watch Us !</p>
          </button>
        </a>
      </div>

      <div className="event-right">
        <p className="section-subtitle">Our Events</p>

        <h2 className="section-title">Join Our Upcoming Events</h2>

        <div className="event-card-group">
          <div className="event-card">
            <div className="content-left">
              <p className="day">28</p>
              <p className="month">March, 2023</p>
            </div>

            <div className="content-right">
              <div className="schedule">
                <p className="time">10:30am To 2:30pm</p>
                <p className="place">Gandhinagar</p>
              </div>

              <a href="#" className="event-name">
                walk-in Interview
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="content-left">
              <p className="day">15</p>
              <p className="month">Mar, 2023</p>
            </div>

            <div className="content-right">
              <div className="schedule">
                <p className="time">10:30am To 6:30pm</p>
                <p className="place">Ahmedabad</p>
              </div>

              <a href="#" className="event-name">
                Admissions Open Till 15 April 
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="content-left">
              <p className="day">20</p>
              <p className="month">May, 2023</p>
            </div>

            <div className="content-right">
              <div className="schedule">
                <p className="time">12:00am To 4:30pm</p>
                <p className="place">Gandhinagar</p>
              </div>

              <a href="#" className="event-name">
                Satva Fest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
