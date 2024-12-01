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
      <h1 className="font-small text-red slide-in-top">Programming Languages</h1>
        {[
          { name: ' Python', img: `${process.env.PUBLIC_URL}/images/python.png` },
          { name: ' Java', img: `${process.env.PUBLIC_URL}/images/java.svg` },
          { name: '  C', img: `${process.env.PUBLIC_URL}/images/c.png`},
          { name: ' Java Script', img: `${process.env.PUBLIC_URL}/images/js.png`},
          
          
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

function WebDev() {
  return (
    <div className="Languages-section"  >
      <div className="row my-2">
      <h1 className="font-small text-red slide-in-top">Web Development</h1>
        {[
          { name: ' Node', img: `${process.env.PUBLIC_URL}/images/nodejs.svg`},
          { name: ' React', img: `${process.env.PUBLIC_URL}/images/reactjs.svg`},
          { name: ' Express', img: `${process.env.PUBLIC_URL}/images/expressjs.png`},
          { name: ' HTML', img: `${process.env.PUBLIC_URL}/images/html.png`},
          { name: ' CSS', img: `${process.env.PUBLIC_URL}/images/css.png`},
          { name: ' Java Server Pages', img: `${process.env.PUBLIC_URL}/images/jsp.png`},       
          
          
        ].map((webdev, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={webdev.img} alt={webdev.name} className="tech-icon" />
              {webdev.name}
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
          { name: 'SQL', img: `${process.env.PUBLIC_URL}/images/sql.svg`},
          { name: 'MySQL', img: `${process.env.PUBLIC_URL}/images/mysql.svg`},
          { name: 'MongoDB', img: `${process.env.PUBLIC_URL}/images/mongodb.svg`},
          { name: 'PostgreSQL', img: `${process.env.PUBLIC_URL}/images/postgresql.svg`},
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
          { name: '  Django', img: `${process.env.PUBLIC_URL}/images/django.png`},
          { name: ' Github', img: `${process.env.PUBLIC_URL}/images/github.png`},
          { name: ' REST API', img: `${process.env.PUBLIC_URL}/images/restapi.png` },
          { name: ' Bootstrap', img: `${process.env.PUBLIC_URL}/images/bootstrap.png`},
          { name: ' Linux', img: `${process.env.PUBLIC_URL}/images/linux.svg`},
          { name: ' JUnit', img: `${process.env.PUBLIC_URL}/images/junit.png`},
          { name: ' Selenium', img: `${process.env.PUBLIC_URL}/images/selenium.png`},
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
          { name: '  AWS', img: `${process.env.PUBLIC_URL}/images/aws.jpg`},
          { name: '  Docker', img: `${process.env.PUBLIC_URL}/images/docker.svg`},
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

function Libraries() {
  return (
    <div className="AppServ-section">
      <div className="row my-2">
        <h1 className="font-small text-red slide-in-top"> Libraries</h1>
        {[
          { name: '  pandas', img: `${process.env.PUBLIC_URL}/images/pandas.png`},
          { name: '  NumPy', img: `${process.env.PUBLIC_URL}/images/numpy.png`},
          { name: '  Sci-kit learn', img: `${process.env.PUBLIC_URL}/images/ski-kit.png`},
        ].map((lib, index) => (
          <div key={index} className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
            <span>
              <img src={lib.img} alt={lib.name} className="tech-icon" />
              {lib.name}
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
          { name: '  Tomcat', img: `${process.env.PUBLIC_URL}/images/tomcat.svg`},
          { name: '  JBoss', img: `${process.env.PUBLIC_URL}/images/jboss.jpg`},
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
              <WebDev/>
              <Databases />
              <TechFw/>
              <CloudComp/>
              <Libraries/>
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
