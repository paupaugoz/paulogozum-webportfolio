import React, { Component } from 'react';
import './App.css';
import './components/introduction.css'
import './components/animate.css'
import './components/projects.css';

import Projects from './components/projects'
import Introduction from './components/introduction'
// import Test from './components/test'

class App extends Component {
  render () {
    return (
      <div>
        <Introduction />
        <Projects />    
      </div>
    )
  }
}

export default App;
