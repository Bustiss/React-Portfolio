import { Attribute } from "./Skills";
import { IoIosSchool } from "react-icons/io";

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
                <a href="./images/Resume2024.pdf" download="Resume.pdf" className='download-btn'>
                    Download
                </a>
                </div>

                <div className="education-container">
                    <h2 className="resume-title"> Education </h2>

                    <h3>UW Madison Coding Bootcamp</h3>

                    <p><h4>Date/Grad</h4> August 2023 - Feb 2024! 
                    <a href="./images/Willie Jones.pdf" download="Willie Jones.pdf" className='download-btn'>
                    Certificate
                    </a>
                    </p>
                    
                    <p><h4>Course Description</h4> ~ Learn fundamental concepts of web development, including HTML, CSS, and JavaScript. Work with servers, databases, and other back end technologies, such as MySQL database, and Node.js. Grow skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React</p>
                    
                    <div className="skill-wrapper">
                        <Attribute className="Ed-Graph" Icon={IoIosSchool} skillName="CSS3" progress={100} color="white" />
                    </div>

                    <h3>Codecademy - Online</h3>
                    <p><h4>Course</h4>~ Computer Science </p>
                    <div className="skill-wrapper">
                        <Attribute className="Ed-Graph" Icon={IoIosSchool} skillName="CSS3" progress={40} color="white" />
                    </div>
                </div>
            </div>
        </div>
    );
};