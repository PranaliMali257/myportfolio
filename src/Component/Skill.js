import React from "react";
import "../Css/Skill.css";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div className="skill-page">

      <div className="progress-bar">
        <FaHtml5 style={{ color: "red" }} />
        <span className="name">HTML</span>
        <progress value={0.8} style={{ width: "800px" }} />
        <p>80%</p>

        <FaCss3 style={{ color: "yellow" }} />
        <span className="name">CSS</span>
        <progress value={0.7} style={{ width: "800px" }} />
        <p>70%</p>

        <FaNodeJs style={{ color: "purple" }} />
        <span className="name">Node Js</span>
        <progress value={0.8} style={{ width: "800px" }} />
        <p>80%</p>

        <RiReactjsFill style={{ color: "blue" }} />
        <span className="name">React Js</span>
        <progress value={0.9} style={{ width: "800px" }} />
        <p>90%</p>

        <SiMongodb style={{ color: "green" }} />
        <span className="name">MongoDb</span>
        <progress value={0.6} style={{ width: "800px" }} />
        <p>60%</p>
      </div>
    </div>
    // </div>
  );
};

export default Skill;
