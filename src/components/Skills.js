import React, { Fragment } from 'react';
import './Skills.css';

function Header() {
  return (
    <div className="header-section">
      <h1 className="font-med text-red slide-in-top">My Skills</h1>
      <hr />
      <p className="text-muted">
      </p>
    </div>
  );
}

function Languages() {
  return (
    <div className="Languages-section"  >
      <div className="row my-2">
      <h1 className="font-small text-red slide-in-top">Languages</h1>
        {[
          { name: ' Python', img: '/images/python.png' },
          { name: ' Java', img: '/images/java.svg' },
          { name: '  C', img: '/images/c.png' },
          { name: ' Java Server Pages', img: '/images/jsp.png' },
          { name: ' HTML', img: '/images/html.png' },
          { name: ' CSS', img: '/images/css.png' },
          { name: ' Java Script', img: '/images/js.png' },
          { name: ' Node', img: '/images/nodejs.svg' },
          { name: ' React', img: '/images/react.png' },
          { name: ' Express', img: '/images/Expressjs.png' },
          
          
        ].map((lang, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={lang.img} alt={lang.name} className="tech-icon" />
              {lang.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


function Databases() {
  return (
    <div className="databases-section">
      <div className="row my-2">
        <h1 className="font-small text-red slide-in-top">Databases</h1>
        {[
          { name: 'MySQL', img: '/images/mysql.svg' },
          { name: 'MongoDB', img: '/images/mongodb.svg' },
          { name: 'PostgreSQL', img: '/images/postgresql.svg' },
        ].map((db, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={db.img} alt={db.name} className="tech-icon" />
              {db.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechFw() {
  return (
    <div className="TechFw-section">
      <div className="row my-2">
        <h1 className="font-small text-red slide-in-top">Technologies/ Frameworks </h1>
        {[
          { name: '  Django', img: '/images/django.png' },
          { name: ' Github', img: '/images/github.png' },
          { name: ' REST API', img: '/images/restapi.png' },
          { name: ' Bootstrap', img: '/images/bootstrap.png' },
          { name: ' Linux', img: '/images/linux.svg' },
          { name: ' JUnit', img: '/images/junit.png' },
          { name: ' Selenium', img: '/images/selenium.png' },
        ].map((tech, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={tech.img} alt={tech.name} className="tech-icon" />
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudComp() {
  return (
    <div className="CloudComp-section">
      <div className="row my-2">
        <h1 className="font-small text-red slide-in-top"> Cloud Computing / DevOps</h1>
        {[
          { name: '  AWS', img: '/images/aws.jpg' },
          { name: '  Docker', img: '/images/docker.svg' },
        ].map((cc, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={cc.img} alt={cc.name} className="tech-icon" />
              {cc.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppServ() {
  return (
    <div className="AppServ-section">
      <div className="row my-2">
        <h1 className="font-small text-red slide-in-top"> Application Servers</h1>
        {[
          { name: '  Tomcat', img: '/images/tomcat.svg' },
          { name: '  JBoss', img: '/images/jboss.jpg' },
        ].map((appserv, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={appserv.img} alt={appserv.name} className="tech-icon" />
              {appserv.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center gradient-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Header />
              <Languages />
              <Databases />
              <TechFw/>
              <CloudComp/>
              <AppServ/>
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12">
              
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
