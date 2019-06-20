import React, { Component } from 'react';
import './App.css';
import './components/introduction.css'
import './components/animate.css'
import './components/projects.css';

import { AnimatedText }  from './components/AnimatedText';
import Projects from './components/projects'
import Introduction from './components/introduction'
import aboutMe from './components/aboutme'
// import Test from './components/test'

class App extends Component {
  render () {
    return (
      <div>    
      
        <Introduction /> 
        <aboutMe />
        <Projects /> 

      

      </div>
    );
  }
}

export default App;
