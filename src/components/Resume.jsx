export const Resume = () => {
    return (
        <div>

            <div style={{width:'100%', height:'100%', display:'flex',flexDirection:'row', justifyContent:'center'}}>
                <div style={{ width: '40%', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', padding: '20px' }}>
                    <h2>Job Experience</h2>

                    <h3>RenewAire LLC - Waunakee, WI</h3>
                    <p><h4>Job Title</h4> Commercial Tech</p>
                    <p><h4>Dates</h4> Dec 2022 - Current</p>
                    <p><h4>Job Description</h4> ~ Build ventilation systems, Wire electrical components (unit & controllers) according to schematic layouts, Run  HiPot  tests  and  perform  live  electrical  tests  to  ensure  units are running properly</p>

                    <h3>ThermaStor - Madison, WI</h3>
                    <p><h4>Job Title</h4> Refrigeration Tech</p>
                    <p><h4>Dates</h4> July 2020 - Apr 2022</p>
                    <p><h4>Job Description</h4> ~ Charge units with refrigerant, Braze & Assemble dehumidifiers, build electrical boxes, run hi-pot current test, final quality checks on units, box unites for shipping</p>
                    <br/>
                </div>

                <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'50%', height:'100%'}}>
                <div style={{backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', padding: '20px', marginLeft:'10px' }}>
                    <h2> Education </h2>

                    <h3>UW Coding School</h3>
                    <p><i>~ Full Stack Web Deveoloper</i></p>
                    <p><h4>Date/Grad</h4> August 2023 - Feb 2024!</p>
                    
                    <p><h4>Course Description</h4> ~ Learn fundamental concepts of web development, including HTML, CSS, and JavaScript. Work with servers, databases, and other back end technologies, such as MySQL database, and Node.js. Grow skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React</p>

                    <h3>Google - Online</h3>
                    <p><i>~ CyberSecurity</i></p>
                    <p><h4>Course Description</h4> ~ The Google Cybersecurity Professional Certificate provides foundational skills in cybersecurity, including threat detection, risk assessment, and incident response, using tools like Python and SIEM systems.
                    </p>
                </div>
                <div>
                    <img src="./images/CyberSecurity-Certificate.pdf" alt="" style={{width:'400px', height:'175px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', margin:'5px'}}/>
                    <img src="./images/Willie Jones.pdf" alt="" style={{width:'400px', height:'175px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', margin:'5px'}}/>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Resume;