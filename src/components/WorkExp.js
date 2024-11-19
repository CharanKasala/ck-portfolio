import React, { Fragment } from 'react';
import './WorkExp.css';  

function WorkExp() {
  return (
    <Fragment>
      <div className="work-exp-container">
        <div className="container">
          <div className="row justify-content-start"> 

            
            <div className="col-12">
              <h1 className="font-big text-red slide-in-top">Work Experience</h1>
              <hr />

             
              <div className="work-experience">
                <h3 className="text-red slide-in-top">Systems Engineer</h3>
                <p><strong>TATA Consultancy Services</strong> | March 2012 - April 2015</p>
                <ul>
                  <li>Created 20+ on-demand reports and 25+ pre-configured reports using Report Designer tools,ensuring the effective
                  presentation of data and insights for business stakeholders.</li>
                  <li>Developed and maintained web pages using JSP, Struts, and Spring framework, contributing to the user interface and
                  functionality of web applications.</li>
                  <li>Optimized SQL queries, resulting in a 30% reduction in query execution time and significantly improving database
                  performance, enhancing overall system responsiveness and reducing load times for key applications.</li>
                  <li>Conducted rigorous unit and integration testing identifying and resolving critical bugs, and achieving a 98% defect-free
                  rate, ensuring the reliability and quality of software products.</li>
                </ul>
              </div>

              
              <div className="work-experience">
                <h3 className="text-red slide-in-top">Senior Software Engineer</h3>
                <p><strong>IRIS Digital Technologies</strong> | April 2015 - September 2022</p>
                <ul>
                  <li>Collaborated with cross-functional teams including project managers, developers, QA, and customers to troubleshoot and
                  resolve technical issues,ensuring successful delivery of key projects, improving client satisfaction.</li>
                  <li>Developed comprehensive project plans with clear specifications, aligning them closely with customer requirements,
                  ensuring successful project execution and meeting 95%+ of client expectations for functionality and performance.</li>
                  <li>Created and maintained a rewards platform for 400+ end users, overseeing its development, deployment, and ongoing
                  updates to ensure optimal performance,enhance user satisfaction, and ensure seamless operation.</li>
                </ul>
              </div>

              <div className="work-experience">
                <h3 className="text-red slide-in-top">Graduate Teaching Assistant</h3>
                <p><strong>University at Albany</strong> | January 2024 - Present</p>
                <ul>
                  <li>Assisted in designing and implementing a hands-on coding lab curriculum, which improved problem-solving efficiency for 90% of students through practical application of course concepts</li>
                  <li>Conducted laboratory sessions and facilitated discussions with 75+ students during office hours to enhance learning experience and promote student growth.</li>
                  <li>Graded assignments, laboratories and projects promptly, ensuring consistent feedback to help students stay on track with course material and improve their performance</li>
                  <li>Created detailed grading rubrics that ensured clear, transparent assessments, allowing students to understand how their work aligned with course objectives and where they could enhance their skills.</li>
                </ul>
              </div>


            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WorkExp;
