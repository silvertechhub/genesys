import React from 'react'
import './Apply.css';
import MiniNav from '../miniNav/MiniNav';
import typing from './typing.png'
import setup from './setup.png'
import Footer from '../footer/Footer';

export default function Apply() {
    return (
        <div>
            <MiniNav />
            <h3 className="software-dev">Apply Your Knowledge</h3>
            <img src={typing} alt="keyboard" className="typing" />
            <p className="apply-text">
            Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the
             first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.
            </p>
            <img src={setup} alt="setup" className="setup" />
            <h3 className="getin">How To Get In </h3>
            <p className="getin-text">
            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry.
             To this end, we have designed our selection process to help us get such people.
             </p>
             <h3 className="online">Online Application </h3>
            <p className="getin-text">
            Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to 
            download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.
             </p>
             <h3 className="phone-call">Phone Call Interviews</h3>
            <p className="getin-text">
            We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, 
            and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.
             </p>
             <h3 className="final">Final Assessment</h3>
            <p className="getin-text">
            At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for
             a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.
             </p>
             <h3 className="get-in">Get In</h3>
            <p className="getin-text">
             If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey
             to build that career of your dreams and provide all the help, support and love that we can muster along the way!
             </p><br /><br /><br/>
             <Footer />

        </div>
    )
}
