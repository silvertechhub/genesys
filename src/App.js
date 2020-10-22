import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import landingPage from './components/landing-page/landingPage';
import learnable from './components/learnable/learnable';
import learnableSD from './components/learnable-SD/learnableSD';
import learnablePD from './components/learnable-PD/learnablePD';
import Apply from './components/AYK/Apply';
import Faq from './components/FAQ/Faq';
import Journal from './components/journal/Journal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={landingPage}/>
        <Route exact path="/learnable" component={learnable}/>
        <Route path="/learnable/softwaredeveloper" component={learnableSD}/>
        <Route path="/learnable/productdesigner" component={learnablePD} />
        <Route path="/learnable/apply" component={Apply} />
        <Route path="/learnable/journal" component={Journal} />
        <Route path="/learnable/faq" component={Faq} />

        
      </div>
    </BrowserRouter>
  );
}

export default App;
