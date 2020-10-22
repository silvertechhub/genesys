import React from 'react';
import MiniNav from '../miniNav/MiniNav';
import "./learnable.css";
import { Link } from 'react-router-dom';
import boyGirl from './boyGirl.png'
import smilingBoy from './smilingBoy.png';
import learning from './learning.png';
import students from "./students.png";
import culture from './culture.png';
import knowledge from './knowledge.png'
import Footer from '../footer/Footer';



export default function learnable() {
    return (
        <div>
          <MiniNav />
          <div className="coming-soon">
              <div className="coming-sub">
                <p className="coming-soon-head">Coming soon: Learnable ‘20</p>
                <p className="coming-soon-text">We've started taking in applications for the next batch of learnable interns.
                    Applications are on till the 21st of Febuary</p>
               </div>
               <div className="coming-sub-2">
                 <p className="click-link">Click link to download...</p>
                 <Link className="brochure">Learnable ‘20 Brochure</Link>
               </div>
          </div>
          <div>
         <p className="everything"> Everything is Learnable</p>
         <p className="everything-text">Learnable is the perfect product development internship program brought to you by Genesys.</p>
          <div className="dev-circle">
              <Link className="dev-link">Development > </Link>
              <p className="expect">What to expect</p>
          </div>
          <div className="prod-circle">
              <Link className="prod-link">Product Design > </Link>
              <p className="expect">What to expect</p>

          </div>
          </div>
          <div className="unnamed-div">
              <img src={boyGirl} alt="boy" className="boygirl" />

          </div>
          <div className="great-people">
             <p className="great-text">We Make People Great</p>
             <p className="great-para">As part of our calculated efforts to contribute to the emerging knowledge and skills driven 
                 economy of Nigeria, Learnable is a 6-month product development training program with an emphasis
                  on software programming and product design. It is for outstanding young individuals who are passionate
                   about building a career in the software industry. 
                   We primarily educate and groom software developers and designers,
                    preparing them for the industry. </p>
                    <img src={smilingBoy} alt="boy" className="smilingboy"/>
          </div>
          <div className="unusual-div">
              <img src={learning} alt="visual learning" className="learning" />
              <h3 className="unusual-head">An Unusual Learning Experience</h3>
              <p className="unusual-text">At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies,
                   we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.
                 Our methods over the years have helped us discover ways to take education out of the classroom.
                 We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.</p>
          </div>
          <div className="rightway-div">
              <p className="for-dev">For  Developers</p>
              <h3 className="rightway-head">Learn to Build Software the Right Way</h3>
              <p className="right-way-text">
              We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will
               empower you to create amazing software the right way.<br />
               We believe in learning through experimentation. 
               Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
              </p>
              <div className="grid-one">
                  <div className="javascript general-grid"> Program With Javascript</div>
                  <div className="git general-grid"> Verion Control with Git</div>
                  <div className="react general-grid"> Web Development With React</div>
                  <div className="node general-grid"> Building APIs With NodeJS</div>
                  <div className="mongodb general-grid"> Managing Data With MongoDB</div>
                  <div className="heroku general-grid"> Deploying With Heroku</div>
              </div>
              <div className="design-div">
                <div className="dif-design">
                    <div className="javascript general-grid">Design User Interfaces</div>
                    <div className="heroku general-grid">Craft User Experiences</div>
                    <div className="react general-grid">Apply Design Thinking</div>
                    <div className="mongodb general-grid">Build Information Architecture</div>
                    <div className="copy general-grid">Copy write for Projects</div>
                    <div className="git general-grid">Brand Products</div>
                </div>
                <p className="for-designers">For Designers</p>
                <p className="dif-design-head">Design Different</p> 
                 <p className="dif-design-text">
                We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.
                Design is at the heart of everything we do at Genesys. 
                Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts.
                At Genesys, we’re building designers who put the users first.
                </p>
                <Link className="design-learn">Learn more</Link>
              </div>
          </div>
          <p className="eligible"> Who is Eligible?</p>
          <p className="eligible-text">To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.
             To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.
           </p>
           <img src={students} className="students" alt="students" />
           <div className="culture-div">
               <img src={culture} alt="culture" className="culture" />
               <h3 className="culture-head">Our Culture</h3>
               <p className="culture-text">
               Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.
               </p>
           </div>
           <h3 className="fun-learning">Learning can be fun…</h3>
           <p className="fun-text">
           We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.
            The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.
             Trust us when we say we know how to have fun.
           </p>
           <div className="expert-learn">
                  <h3 className="expert-head">Learn from the Experts</h3>
                  <p className="expert-text">
                  As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months 
                  in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.
                  </p>
           </div>
           <p className="not-classroom">Learning doesn’t always have to be in the classroom</p>
           <p className="notclassroom-text">
            We have designed other learning activities that aren’t classroom-based. 
            You will learn how to be a better person, how to have good conversations, 
            how to work better with people and most importantly, how to lead other people.
                Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.
           </p>
           <div className="knowledge-div">
               <img src={knowledge} className="knowledge" alt="knowledge" />
              <h3 className="knowledge-head">Apply Your Knowledge</h3>
              <p className="knowledge-text">
              Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. 
              You’ll then get to show off your special project to everyone.
              </p>
           </div>
           <Footer />
        </div>
    )
}
