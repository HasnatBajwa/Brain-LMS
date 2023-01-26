import React from 'react'
import './FooterStyles.css';
import { Grid } from '@material-ui/core';
import Logo from '../../Assets/Front-Page/logo1.png';
import img1 from '../../Assets/Front-Page/CPE-QAS-Logo-white.png'


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <div className="footer-objects">
              <img src={Logo} alt="" className="footer-logo" />
              <p className="footer-txt">
                Empowering everyday people with life-changing data skills.
              </p>
              <p className="footer-txt-newsletter">
                Subscribe to the newsletter
              </p>
              <input type="text" placeholder='barry@hbo.com' className="sub" />
              <button className="subs-btn">SUBSCRIBE</button>
              <p className="footer-txt">
                <i>No spam, just helpful tips & tricks delivered directly to your inbox.</i>
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                LEARN
              </h3>
              <p className="footer-links">
                Self-Paced Courses

              </p>
              <p className="footer-links">
                Learning Paths
              </p>
              <p className="footer-links">
                Maven Bootcamp
              </p>
              <p className="footer-links">
                Credentials & Badges
              </p>
              <img src={img1} alt="" className="object-img" />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                RESOURCES
              </h3>
              <p className="footer-links">
                Maven Blog
              </p>
              <p className="footer-links">
                Maven Showcase
              </p>
              <p className="footer-links">
                Why BI?
              </p>
              <p className="footer-links">
                Find Your Path
              </p>
              <p className="footer-links">
                Data Playground
              </p>
              <p className="footer-links">
                Help Center
              </p>
              <p className="footer-links">
                Site map
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                SERVICES
              </h3>
              <p className="footer-links">
                Team Training

              </p>
              <p className="footer-links">
                Consulting
              </p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <div className="footer-objects">
              <h3 className="footer-heading">
                CONNECT
              </h3>
              <p className="footer-links">
                Meet The Team

              </p>
              <p className="footer-links">
                Contact
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="end-footer-container">
        <Grid container>
        <Grid item xs={6} sm={6} md={6}>
          <p className="endfooter-txt">
            &copy; Maven Analytics, LLC | All Rights Reserved
          </p>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p className="endfooter-links">

            <span className="endfooter-link"> Terms&Conditions</span>
            <span className="endfooter-link">Privacy</span>
            <span className="endfooter-link">Communuity Forum Policy</span>
            <span className="endfooter-link">Contact</span>
          </p>
        </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Footer;