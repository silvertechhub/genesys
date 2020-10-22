import React from 'react';
import genesys from './genesys.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
           <img src={genesys} alt="genesys" className="logo"/> 
           <ul>
              <li><NavLink to="/learnable" className="links"> LEARNABLE</NavLink></li>
              <li><NavLink to="/" className="links">AGORA</NavLink></li>
              <li><NavLink to="/" className="links">START ZONE</NavLink></li>
              <li><NavLink to="/" className="links"> ABOUT</NavLink></li>
              <li><NavLink to="/" className="links">CONTACT</NavLink></li>
              <li className="build">build a project with</li>
              <button className="devstudio">DEVSTUDIO</button>
           </ul>
        </nav>
    )
}
