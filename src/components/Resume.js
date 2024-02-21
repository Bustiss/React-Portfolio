import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

const Skill = ({ Icon, skillName, progress, color }) => {
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

const Skills = () => {
    return (
        <div className="skills-progression">
            <Skill Icon={FaHtml5} skillName="HTML5" progress={98} color="white" />
            <Skill Icon={FaCss3Alt} skillName="CSS3" progress={90} color="white" />
            <Skill Icon={IoLogoJavascript} skillName="JavaScript" progress={88} color="white" />
            <Skill Icon={FaDatabase} skillName="MySQL" progress={80} color="white" />
            <Skill Icon={FaNode} skillName="Node.js" progress={86} color="white" />
            <Skill Icon={FaReact} skillName="React" progress={80} color="white" />
        </div>
    );
};

export const Resume = () => {
    return (
        <div className="resume-page">
            <div className="resume-container">
                
                <div className="job-container">
                    <h2 className="resume-title">Job Experience</h2>

                    <h3>RenewAire LLC - Waunakee, WI</h3>
                    <p><h4>Job Title</h4> Commercial Tech</p>
                    <p><h4>Dates</h4> Dec 2022 - Current</p>
                    <p><h4>Job Description</h4> ~ Build ventilation systems, Wire electrical components (unit & controllers) according to schematic layouts, Run  HiPot  tests  and  perform  live  electrical  tests  to  ensure  units are running properly</p>

                    <h3>ThermaStor - Madison, WI</h3>
                    <p><h4>Job Title</h4> Refrigeration Tech</p>
                    <p><h4>Dates</h4> July 2020 - Apr 2022</p>
                    <p><h4>Job Description</h4> ~ Charge units with refrigerant, Braze & Assemble dehumidifiers, build electrical boxes, run hi-pot current test, final quality checks on units, box unites for shipping</p>
                    <br/>
                <a href="./images/Willie-Jones.pdf" download="Resume.pdf" className='download-btn'>
                    Download
                </a>
                </div>

                <div className="education-container">
                    <h2 className="resume-title"> Education </h2>

                    <h3>UW Madison Coding Bootcamp</h3>
                    <p><h4>Date/Grad</h4> August 2023 - Feb 2024!</p>
                    <p><h4>Course Description</h4> ~ Learn fundamental concepts of web development, including HTML, CSS, and JavaScript. Work with servers, databases, and other back end technologies, such as MySQL database, and Node.js. Grow skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React</p>
                    
                    <div className="skill-wrapper">
                        <Skill Icon={IoIosSchool} skillName="CSS3" progress={86} color="white" />
                    </div>
                </div>

                <div className="skills-container">
                    <h2 className="resume-title"> Skills </h2>
                    <Skills />
                </div>

            </div>
        </div>
    );
};