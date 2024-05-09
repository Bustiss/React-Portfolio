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

  return (
    <div className="skill">
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
        />
        <foreignObject x="30%" y="28%" width="60" height="60">
          <Icon size={50}/>
        </foreignObject>
      </svg>
    </div>
  );
};

const Skill = () => {
  return (
      <div className="skills-progression">
          <Attribute Icon={FaHtml5} color="white" />
          <Attribute Icon={FaCss3Alt} color="white" />
          <Attribute Icon={IoLogoJavascript} color="white" />
          <Attribute Icon={FaDatabase} color="white" />
          <Attribute Icon={FaNode} color="white" />
          <Attribute Icon={FaReact} color="white" />
          <Attribute Icon={FaPython} color="white" />
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