import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export const Attribute = ({ Icon, skillName, progress, color }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
      <div className="skill">
      <Icon size={18}/>
      <svg className="circle" width="120" height="120">
          <circle
              className="progress-ring__circle"
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
          />
          <circle
              className="progress-ring__circle"
              stroke="cyan"
              strokeWidth="6"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              transform={`rotate(-90 60 60)`} // Rotates the circle to start from the top
          />
          <text
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              stroke="black" 
              strokeWidth="1px" 
              dy=".3em"
              fontSize="15px"
          >
              {progress}%
          </text>
      </svg>
  </div>
  );
};

const Skill = () => {
  return (
      <div className="skills-progression">
          <Attribute Icon={FaHtml5} skillName="HTML5" progress={99} color="white" />
          <Attribute Icon={FaCss3Alt} skillName="CSS3" progress={99} color="white" />
          <Attribute Icon={IoLogoJavascript} skillName="JavaScript" progress={88} color="white" />
          <Attribute Icon={FaDatabase} skillName="MySQL" progress={80} color="white" />
          <Attribute Icon={FaNode} skillName="Node.js" progress={86} color="white" />
          <Attribute Icon={FaReact} skillName="React" progress={86} color="white" />
          <Attribute Icon={FaPython} skillName="Python" progress={80} color="white" />
      </div>
  );
};

export const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <h2 className="resume-title"> Skills </h2>
        <Skill />
      </div>
    </div>
  );
};