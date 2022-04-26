import React from "react";

import { Link } from 'react-router-dom'


import './about.css'



function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <img src="img/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <div className="about-sub-heading">
                <h5>UI / UX DESIGN</h5>
              </div>
              <h2>
                UX/UI Design For Next <br />
                Business Life
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, unde odio ab eveniet quas perspiciatis assumenda dolores ad ut qui distinctio, quaerat rerum inventore quod, porro vel soluta quibusdam
                delectus.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-sub">
                  <h6><i className="fa fa-check"></i> Business Card Design</h6>
                  <h6><i className="fa fa-check"></i> E-commerce Design</h6>
                  <h6><i className="fa fa-check"></i> Mobile App Design</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-sub">
                  <h6><i className="fa fa-check"></i> UX / UI Design</h6>
                  <h6><i className="fa fa-check"></i> Product Design</h6>
                  <h6><i className="fa fa-check"></i> Web Design</h6>
                </div>
              </div>
            </div>
            <Link to="" className="btn1">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;