import React from 'react';
import { Skills } from './Skills';

export const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-content">
                {/* Job Experience Section */}
                <section className="resume-section job-experience">
                    <h2>Job Experience</h2>

                    <article>
                        <h3>RenewAire LLC - Waunakee, WI</h3>
                        <p><strong>Job Title:</strong> Commercial Tech</p>
                        <p><strong>Dates:</strong> Dec 2022 - Current</p>
                        <p><strong>Job Description:</strong> Build ventilation systems, wire electrical components (unit & controllers) according to schematic layouts, run HiPot tests and perform live electrical tests to ensure units are running properly.</p>
                    </article>

                    <article>
                        <h3>ThermaStor - Madison, WI</h3>
                        <p><strong>Job Title:</strong> Refrigeration Tech</p>
                        <p><strong>Dates:</strong> July 2020 - Apr 2022</p>
                        <p><strong>Job Description:</strong> Charge units with refrigerant, braze & assemble dehumidifiers, build electrical boxes, run hi-pot current test, final quality checks on units, box units for shipping.</p>
                    </article>
                </section>

                {/* Education Section */}
                <section className="resume-section education">
                    <h2>Education</h2>

                    <article>
                        <h3>UW Coding School</h3>
                        <p><i>~ Full Stack Web Developer</i></p>
                        <p><strong>Date/Grad:</strong> August 2023 - Feb 2024</p>
                        <p><strong>Course Description:</strong> Learn fundamental concepts of web development, including HTML, CSS, and JavaScript. Work with servers, databases, and other back-end technologies, such as MySQL database, and Node.js. Grow skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React.</p>
                    </article>

                    <article>
                        <h3>Google - Online</h3>
                        <p><i>~ Cybersecurity</i></p>
                        <p><strong>Date/Grad:</strong> Nov 2024</p>
                        <p><strong>Course Description:</strong> The Google Cybersecurity Professional Certificate provides foundational skills in cybersecurity, including threat detection, risk assessment, and incident response, using tools like Python and SIEM systems.</p>
                    </article>

                    <article>
                        <h3>Google - Online</h3>
                        <p><i>~ IT Support</i></p>
                        <p><strong>Date/Grad:</strong> In Progress</p>
                        <p><strong>Course Description:</strong> Develop skills for IT roles, including computer assembly, wireless networking, software installation, and customer service. Master troubleshooting, debugging, and systems like Linux, DNS, CLI, and binary code.</p>
                    </article>
                </section>

                {/* Certificates Section */}
                <section className="resume-section certificates">
                    <h2>Certificates</h2>
                    <div className="certificates-images">
                        <img
                            src="./images/Willie Jones.pdf"
                            alt="Resume for Willie Jones"
                            className="certificate-thumbnail"
                        />
                        <img
                            src="./images/CyberSecurity-Certificate.pdf"
                            alt="Google Cybersecurity Certificate"
                            className="certificate-thumbnail"
                        />
                        <img
                            src="./images/IT Support Fundamentals.pdf"
                            alt="Google IT Support Certificate"
                            className="certificate-thumbnail"
                        />
                    </div>
                </section>
                    
                    {/* Skills Section */}
                    <section className="resume-section">
                        <Skills />
                    </section>
            </div>
        </div>
    );
};

export default Resume;
