import React from "react";
import "../Css/Home.css";
import { Button } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

import photo from "../images/photo.jpeg";
const Home = () => {
  return (
    
      <div className="home-page">
        {/* <h2 className="home-h3"></h2> */}
        <div className="home-name">
          <h2>Hello ! </h2>
          <h2>I'm Pranali Mali</h2>
          <h3>MERN Stack Developer</h3>
          <p>
            Becoming a MERN stack developer as a fresher requires dedication,
            consistent practice, and a passion for learning. Building a strong
            foundation in JavaScript and mastering each component of the MERN
            stack will prepare you for a successful career in web development.
          </p>
        </div>
        <div className="images">
          <img src={photo} />
        </div>
      </div>
    
  );
};

export default Home;
