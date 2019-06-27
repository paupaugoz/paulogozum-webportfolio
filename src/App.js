import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import './components/animate.css'
import './components/projects.css';
import './components/divider.css';

import Table from './components/table';
import { AnimatedText }  from './AnimatedText';
import Projects from './components/projects'
import Introduction from './components/introduction'
import Divider from './components/divider'
import AboutMe from './components/aboutme'
// import Test from './components/test'
class App extends Component {
  render () {
    return (
      <div>

        <Introduction />
        <Divider />
        <AboutMe />
        <Divider />
        <Projects />


      </div>
    );
  }
}

export default App;
