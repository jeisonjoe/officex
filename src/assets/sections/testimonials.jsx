import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="wrapper">
        <div className="top-section">
          <span>What Clients Say</span>
          <div className="rhs">
            <div className="heading">
              We're trusted by the most important teams
            </div>
            <div className="metrics">
              <div className="metric-item">
                <i>
                  <BiCheckCircle />
                </i>
                10k+ Customers
              </div>
              <div className="metric-item">
                <i>
                  <BiCheckCircle />
                </i>
                99% Satisfaction
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          {testimonials.map((testimonial, i) => {
            return (
              <div key={i} className="testimonial-item">
                <div className="testimonial-header">
                  <img src={testimonial.src} alt="" />
                  <div className="time">{testimonial.time}</div>
                </div>
                <div className="testimonial-body">"{testimonial.text}"</div>
                <div className="testimonial-footer">{testimonial.writer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
