import React from 'react';
import './Journal.css';
import MiniNav from '../miniNav/MiniNav';
import setup from '../AYK/setup.png';
import { Link } from 'react-router-dom';
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import Footer from '../footer/Footer';


export default function Journal() {
    return (
        <div>
         <MiniNav />  
         <div className="journal-intro">  
         <h3 className="journal">Journal</h3>
         <button className="categories">Categories</button>
         <img src={setup} alt="setup" className="setup2" />
          <Link className="intro-inspire">Inspiration</Link>

        </div>
        <h3 className="learn-design">Learn Design Thinking like a Pro and Build Projects that People will care about</h3>
        <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam.
         Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.
        </p>   
        <div className="row">
          <div className="column"><img alt="" src={pic1} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="" src={pic2} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="" src={pic3} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="pictures" src={pic4} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
        </div>  

        <div className="row">
          <div className="column"><img alt="pictures" src={pic1} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="pictures" src={pic2} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="pictures" src={pic3} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
          <div className="column"><img alt="pictures" src={pic4} className="pics" />
          <p className="green-inspire">Inspiration</p> 
          <h3 className="pro-like">Learn Design Thinking like a Pro and Build Projects that People will care about
           </h3>
          </div>            
        </div>  
        <Footer />     
        </div>
    )
}
