// import React from "react";
import asideImage from "/src/feedallImg.jpg";
import "./homePage.scss";
import { Link } from "react-router-dom";
import NavBar from "./nav";
function HomePage() {
  return (
    <>
      <NavBar />

      <div className="wrapper">
        <div className="home-container">
          <div className="hero-description">
            <h1>
              A truly circular
              <div>food</div>
              production platform
            </h1>
            <div className="image-background-mobile">
              <img  className='image-background-mobile' src={asideImage} width={340} alt="feedall" />
            </div>
          </div>
          <div className="links">
            <Link to="/join">
              <h1>Join Our Team</h1>
            </Link>
            <Link to="/invest">
              <h1>Become an Investor</h1>
            </Link>
            <Link to="/join-cohort">
              <h1>Join The Next Cohort</h1>
            </Link>
            <Link to="/faq">
              <h1>FAQ</h1>
            </Link>
          </div>
        </div>
        <div className="image-background">
          <img src={asideImage} width={500} alt="feedall" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
