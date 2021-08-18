import React from 'react';
import './style.css';


function Footer() {
  return (
    <div className="footer row">
        <div className="col-lg-3 col-md-6">
          <ul>
            <h2>Company</h2>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
        <ul>
            <h2>follow us out there</h2>
            <li>FaceBook</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <ul>
            <h2>contact</h2>
            <li>nguyenphucnha111@gmail.com</li>
          </ul>
          </div>
        <div className="col-lg-3 col-md-6"> 
          <ul>
            <h2>copyright</h2>
            <li>Nha Nguyen</li>
          </ul></div>
    </div>
  )
}

export default Footer
