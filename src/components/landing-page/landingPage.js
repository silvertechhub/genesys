import React from 'react';
import './landingPage.css'
import youngPeople from "./youngPeople.png";
import youngMan from "./youngMan.png";
import agora from "./agora.png";
import startZone from "./startZone.png";
import people from "./people.png";
import youngBoy from "./youngBoy.png";
import girls from "./girls.png";
import redHands from "./redHands.png";

export default function landingPage() {
    return (
        <div>
            <div className="intro-text">
            Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.
            </div>
            <div className="rider">We understand that opportunities are scarce in these parts.
                 We are either creating or exposing our people to these opportunities.
            </div>
            <div>
                <img src={youngPeople} alt="young girls" className="young-people"/>
            </div>
            <div className="learnable-div">
               <img src={youngMan} alt="smiling boy" className="young-man"/>
               
                  <p className="learnable-header"> Learnable </p>
                   <p className="learnable-text">Every year, young Nigerians are launching new careers in the technology industry. 
                       Find out how Genesys is helping them do it.</p>
                       <a href="/" className="learn-more">Learn more</a>
            </div>
            <div className="agora-div">
                <img src={agora} className="agora" alt="agora" />
                <p className="agora-header">Agora</p>
                <p className="agora-text">We are reimagining the workplace and how people work.
                     Find out how our <br />co-working spaces can help you enjoy the work that you do.</p>
                     <a href="/" className="agora-learn">Learn more</a>
            </div>
            <img src={startZone} alt="start" className="start-zone"/>
            <p className="start-header">Start Zone</p>
            <p className="start-text">The business environment is harsh for early-stage businesses.
             We can help you rise above it all.</p>
             <a href="/" className="how">Here's How</a>
             <div className="other-div">
                 <p className="other-text">Other things we do</p>
                 <img src={people} alt="people" className="people" /><a href="/" className="Genesys-Ignite">Genesys Ignite</a>
                 <img src={youngBoy} alt="boy" className="boy" /><a href="/" className="CodeVille">CodeVille</a>
                 <img src={girls} alt="girls" className="girls" /><a href="/" className="pink-summer">Pink summer of code
</a>
             </div>
             <div className="best-team">
                 <img src={redHands} alt="hands" className="red-hands" />
                 <p className="best-header">The best team in the world</p>
                 <p className="best-text">We work with the most amazing people our industry has to offer.
                 They are really passionate about making a difference</p>
                 <a href="/" className="see-team">See Team</a>

             </div>
             <div className="stay-up">
                 <p className="stay-up-text">Stay up to date on what we are doing and new learning opportunities</p>
                 <div className="email-div">
                     <input type="email" className="email" placeholder="Your Email" />
                    
                     <button className="subscribe">Subscribe</button>
                     <p className="privacy">View privacy policy</p>
                 </div>
             </div>

        </div>
    )
}
