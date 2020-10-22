import React from 'react';
import './learnablePD.css';
import MiniNav from '../miniNav/MiniNav';
import smilingBoy from '../learnable/smilingBoy.png'
import prodPic from './prodPic.png'
import Footer from '../footer/Footer';


export default function learnablePD() {
    return (
        <div>
            <MiniNav />
            <h3 className="software-dev">The Learnable Software Developer</h3>
            <img src={smilingBoy} alt="dev" className="prod-pic" />
            <p className="dev-text">
            At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.<br/> <br/>
             In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.
            Oh, and you’ll make amazing friends while you're at it!
            </p>
            <p className="quote-prod">
            “The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” 
- Macklemore
            </p>
            <img src={prodPic} alt="coding" className="design-pic" />
            <h3 className="expect">We expect you to…</h3>
            <p className="expect-text">
            Play nice with other people.<br/><br/>

            Be an actively engaged person. That means you are present, motivated, and social.<br/><br/>

            Understand how to use the Figma design software<br/><br/>

            Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.<br/><br/>

            Have a basic understanding of design principles and theories
            To have creative courage. This is a tough industry, only the brave and sturdy remain.<br/><br/>
            
            Be prepared to defend your decisions and take constructive criticism.<br/><br/>

            To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.
            </p>
            <Footer />
        </div>
    )
}
