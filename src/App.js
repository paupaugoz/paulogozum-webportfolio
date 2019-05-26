import React, { Component } from 'react';
import './App.css';
import './components/Introduction.css'
import './components/animate.css'
import './components/Projects.css'

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
