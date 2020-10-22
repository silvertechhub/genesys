import React from 'react'
import MiniNav from '../miniNav/MiniNav'
import hand from './hand.png';
import './Faq.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Faq() {
    return (
        <div>
            <MiniNav />
            <h3 className="faq-head">FAQ</h3>
            <img src={hand} alt="hand"  className="hand"/>
            <div className="questions">
               <Link>How many people can attend a course?</Link><br/><br/>
               <Link>What’s the learning experience like?</Link><br/><br/>
               <Link>Who are the coaches?</Link><br/><br/>
               <Link>How far in advance should we book?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               <Link>Can you customize your courses?</Link><br/><br/>
               
            </div>
            <Footer />
        </div>
    )
}
