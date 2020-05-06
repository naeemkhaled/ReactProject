import React from 'react';
import './style.css'

const Protfolio = () => {
    return (
      <div className="profile_skills">
      <div className="container">
          <div className="profile">
              <h2 className="profile-title"><span>My </span>Profile</h2>
              <ul className="profile-list">
                  <li className="profile-item">
                      <span>Name</span>
                      Naeem Khaled
                  </li>
                  <li className="profile-item">
                      <span>Birthday</span>
                      1/9/1997
                  </li>
                  <li className="profile-item">
                      <span>Address</span>
                      Ain shams
                  </li>
                  <li className="profile-item">
                      <span>Phone</span>
                      4444 5555 6666
                  </li>
                  <li className="profile-item">
                      <span>Email</span>
                      naeem@email.com
                  </li>
                  <li className="profile-item">
                      <span>Website</span>
                      <span className="web">www.google.com</span>
                  </li>
              </ul>
          </div>
          
          <div className="skills">
              <h2 className="skills-title">Some <span>skills</span></h2>
              <p className="skills-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              <div className="bar">
                  <span className="title">Bootstrap</span>
                  <span className="perc">100%</span>
                  <div className="parent">
                      <span className="sp1"></span>
                  </div>
              </div>
              
              <div className="bar">
                  <span className="title">CSS3</span>
                  <span className="perc">90%</span>
                  <div className="parent">
                      <span className="sp2"></span>
                  </div>
              </div>
              
              <div className="bar">
                  <span className="title">Photoshop</span>
                  <span className="perc">80%</span>
                  <div className="parent">
                      <span className="sp3"></span>
                  </div>
              </div>
          </div>
          
      </div>
  </div>
  )  
}


export default Protfolio;
