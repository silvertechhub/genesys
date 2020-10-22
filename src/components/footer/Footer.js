import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'
import footerPic from './footerPic.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import insta from './insta.png';
import youtube from './youtube.png';
import Vector from './Vector.png';

export default function Footer() {
    return (
        <div>
            <div className="intouch-div">
              <h3 className="stay-up-text">Stay up to date on what we are doing and new learning opportunities</h3>
              <div className="email-div-footer">
                     <input type="email" className="email-footer" placeholder="Your Email" />
                    
                     <button className="subscribe-footer">Subscribe</button>
                     <p className="privacy">View privacy policy</p>
                 </div>
            </div>
            <div className="main-footer">
                <ul >
                    <li className="footer-list"><Link>BUILD SOFTWARE</Link></li>
                    <li className="footer-list"><Link>DESIGN DIFFRENT</Link></li>
                    <li className="footer-list"><Link>APPLY YOUR KNOWLEDGE</Link></li>
                    <li className="footer-list"><Link>FAQ</Link></li>
              </ul>
              <p className="address">Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, 
              Expressway, Centenary City, Enugu. Nigeria <br /><br/><br /> <Link>GET IN TOUCH</Link></p>
              <img src={footerPic} alt="footer-pic" className="footer-pic" />
              <p className="footer-text">Learnable is proud to be a collaborative effort of all the arms of our product team 
                  <br /> <br /> <Link>Head to DevStudio</Link>
                  <div className="icons">
                      <img src={twitter} alt="" />
                      <img src={facebook} alt="" />
                      <img src={linkedin} alt="" />
                      <img src={insta} alt="" />
                      <img src={youtube} alt="" />
                      <img src={Vector} alt="" />
                  </div>
                  <p className="copyright">&copy; Genesys 2020  </p>
                  <p className="statment"><Link>Privact Statment</Link></p>
              </p>
            </div>
        </div>
    )
}
