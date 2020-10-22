import React from 'react'
import './MiniNav.css';
import {Link } from 'react-router-dom';

export default function MiniNav() {
    return (
        <div className="list">
            <ul className="subnav">
            <li > <Link to="/learnable" className="active">Home </Link></li>
            <li> <Link to="/learnable/softwaredeveloper"  className="sublink">Software Developer </Link></li>
            <li > <Link to="/learnable/productdesigner" className="sublink">Product Designer </Link></li>
            <li > <Link to="/learnable/apply" className="sublink">Apply </Link></li>
            <li > <Link to="/learnable/journal" className="sublink">Journal </Link></li>
            <li > <Link to="/learnable/faq" className="sublink">FAQ </Link></li>
            </ul>
        </div>
    )
}
