import React, { Fragment } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './Projects.css';

function Projects() {
  return (
    <Fragment>
      <div className="col p-4 gradient-background"> 
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Projects I've Built</h2>
            </div>
          </div>
          <hr />
          
          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title">Mall Management Made Easy</h5>
                <p className="text-white project-description">
                Created and deployed a high-performance Mall Management System using Java and Spring Boot to enhance mall operations, 
                reduce customer wait times, and boost overall efficiency. 
                Key features include parking space reservations, movie ticket purchases, and food pre-orders. 
                Utilized MySQL for database management and deployed on AWS EC2, ensuring a scalable infrastructure with 99.9% uptime.
                </p>
                <div className="row d-flex justify-content-center">
                  <a href="https://github.com/CharanKasala/MallManagementMadeEasy.git" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title">Reliable File Transfer with Caching Using TCP and UDP</h5>
                <p className="text-white project-description">
                Designed and implemented a file transfer system using a client-server-cache architecture for efficient large file transfer. Utilized TCP with a custom Stop-and-Wait protocol over UDP for reliable data transmission and integrated caching to reduce server load, cutting retrieval times by 35%. Performance analysis with Wireshark showed a 30% improvement in data transfer efficiency
                </p>
                <div className="row d-flex justify-content-center">
                  <a href="https://github.com/CharanKasala/File_Transfer_using_Cache_TCP_UDP.git" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title">Inventory Management using MERN stack</h5>
                <p className="text-white project-description">
                Developed a MERN stack-based Inventory Management Application to streamline stock control and order tracking, improving tracking efficiency by 40%.
                Built an nteractive interface using React, Containerized the application using Docker and deployed it on AWS EC2 for ensuring scalability.
                Also, Implemented secure authentication using JWT for ensuring robust security.
                </p>
                <div className="row d-flex justify-content-center">
                  <a href="https://github.com/CharanKasala/Inventory_Management.git" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title text-sm">Producer-Consumer Application with Interprocess Communication</h5>
                <p className="text-white project-description">
                Developed a Producer-Consumer system in C using fork(), pipe(), and exec() system calls for inter-process communication. The Producer encodes data with parity and frames, while the Consumer converts lowercase to uppercase and re-encodes it. Implemented a layered architecture for encoding, decoding, and error handling with parity checks, ensuring seamless and accurate data transmission.
                 </p>
                <div className="row d-flex justify-content-center">
                  <a href="https://github.com/CharanKasala/Producer_Consumer_Application.git" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div>
{/*}
            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title"></h5>
                <p className="text-white project-description">
                 
                 </p>
                <div className="row d-flex justify-content-center">
                  <a href="" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center my-2">
              <div className="project-box">
                <h5 className="ff-jose my-1 project-title"></h5>
                <p className="text-white project-description">
                 
                 </p>
                <div className="row d-flex justify-content-center">
                  <a href="" className="portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Link  </a>
                </div>
              </div>
            </div> */}

          </div>

          

        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
