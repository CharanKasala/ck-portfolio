import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center gradient-background"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hello,</h1>
                <h1 className="m-0 font-big animate-charcter"> This is Charan 👋</h1> 
                <p></p>
                <p className="ls-2 mt-2 slide-in-bottom">
                  I am a seasoned software professional with extensive experience in delivering innovative and scalable solutions. 
                  Over the years, I've had the privilege of working with a diverse set of technologies and industries, ranging from enterprise software development to cloud computing. 
                </p>
                <p className="ls-2 mt-2 slide-in-bottom">
                I believe in continuous learning and am always eager to explore new tools, frameworks, and methodologies that push the boundaries of what's possible.
                </p>
                <p className="ls-2 mt-2 slide-in-bottom">
                If you're looking to bring a project to life or collaborate on something exciting, let's connect and make great things happen!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="row">
                <div className="col-12 mb-3">
                  <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/api.png`}
                    alt="Coding animation"
                    style={{ maxWidth: '60%', borderRadius: '15px' }}  
                  />
                </div>
                <p></p>
                <p></p>
                <p></p>
                <div className="col-12 d-flex mt-3" style={{ marginLeft: '50px' }}>
                  <div className="mx-3">
                    <a href="mailto:ckasala7@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/email-logo.svg`} 
                        alt="Email"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '50px',borderRadius: '15px' }} 
                        title="Connect through email"  
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="https://www.linkedin.com/in/charan-kasala-021035297/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/linkedin.png`} 
                        alt="LinkedIn"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '50px',borderRadius: '15px' }} 
                        title="Go to LinkedIn" 
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="https://github.com/CharanKasala/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/github.png`} 
                        alt="GitHub"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '50px',  borderRadius: '15px'}}
                        title="Go to Github"  
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
