import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="hero">
      <div className="hero-left" style={{ marginLeft: "5rem" }}>
        <h1>Capture notes, share them with others.</h1>
        <p className="subtitle">
          WOW UI provides a robust, customizable, and accessible library of
          foundational and advanced components, enabling you to build your own
          design system and develop your applications faster.
        </p>
        <Link to="/signup">
          <a className="button btn-primary">Get Started</a>
        </Link>
        <Link to="/login">
          <h4 style={{ marginTop: "1.5rem", cursor: "pointer" }}>
            Already have an account ??
          </h4>
        </Link>
      </div>

      <div className="hero-right">
        <div className="hero-img-cont">
          <img
            src="https://play-lh.googleusercontent.com/36szRvmqeewn6fxpx9V88zhpPU3c84Im9zjAFPZl-cReiztnAD6cn0jSnWBGsNNdPsU"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
