import React, { Fragment } from 'react'
import {VscHome} from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {BsCode} from 'react-icons/bs'
import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillSkype, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>

        
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline ff-jost fw-600"></span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link align-middle px-0 text-white">
                                <VscHome className='fs-5'/> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                                <BsCode className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Skills</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/WorkExp" className="nav-link align-middle px-0 text-white">
                                <FiUser className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Work Experience</span>
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link align-middle px-0 text-white">
                                <MdOutlineDashboard className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Projects</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1N15ON1hblBV0C3M8AAq2gLefjkO83IoR/view?usp=drive_link"className="nav-link align-middle px-0 text-white" 
                             target="_blank" rel="noopener noreferrer" >
                                <AiOutlineUnorderedList className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Resume</span></a>
                        </li>
                        <li>

                        </li>

                        <li>

                        <div className="col-12 d-flex mt-5" style={{ marginLeft: '0', paddingLeft: '0', width: '100%' }}>
                  <div className="mx-2">
                    <a href="mailto:ckasala7@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/email-logo.svg`}   
                        alt="Email"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '35px',borderRadius: '15px' }} 
                        title="Connect through email"  
                      />
                    </a>
                  </div>
                  <div className="mx-2">
                    <a href="https://www.linkedin.com/in/charan-kasala-021035297/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/linkedin.png`} 
                        alt="LinkedIn"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '35px',borderRadius: '15px' }} 
                        title="Go to LinkedIn" 
                      />
                    </a>
                  </div>
                  <div className="mx-2">
                    <a href="https://github.com/CharanKasala/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/github.png`} 
                        alt="GitHub"
                        className="img-fluid img-curved"
                        style={{ maxWidth: '35px',  borderRadius: '15px'}}
                        title="Go to Github"  
                      />
                    </a>
                  </div>
                </div>

                        </li>
                    </ul>

                    

                    {/*
                    <div className="dropdown pb-4 dropup">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdOutlineContactPage className='fs-5'/>
                            <span className="d-none d-sm-inline mx-1">Contact</span>
                        </a>
                        <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item text-black" href="mailto:ckasala7@gmail.com" target="/blank"><MdEmail className='fs-5'/> Email</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/charan-kasala-021035297/" target="/blank"><AiFillLinkedin className='fs-5'/> LinkedIn</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://github.com/CharanKasala/" target="/blank"><AiFillGithub className='fs-5'/> Github</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>

    </Fragment>
  )
}

export default Sidebar