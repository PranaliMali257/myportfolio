import React from "react";
import "../Css/Experience.css";

function Experience() {
  return (
    // <div className="page">

    <div className="experience">
      {/* <h3>Experience</h3> */}
      <div className="experience-field">
        <div class="cards">
          {/* <div class="card red">
            <p class="tip">Infosys</p>
            <p class="second-text">
              The workshop at Infosys provided a comprehensive learning
              experience, combining theoretical insights with practical
              applications in digital banking. It equipped me with valuable
              skills and knowledge essential for navigating the evolving
              landscape of digital transformation in the financial sector
            </p>
          </div> */}
          <div class="card blue">
            <p class="tip">Technoweit</p>
            <p class="second-text">
              My experience at Technoweit as a MERN stack developer was pivotal
              in enhancing my technical proficiency, collaborative skills, and
              overall contribution to delivering successful software solutions.
              It provided me with a solid foundation in full-stack development
              and prepared me for tackling complex challenges in the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
