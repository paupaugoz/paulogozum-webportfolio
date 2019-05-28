import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';

export default class Introduction extends Component {
  render () {
    return (
      <div id="introduction" className="intro-wrapper">
        <div className="flex-wrapper black">
         
          <h1 className="animated fadeInDownBig offwhite test">Hi I'm Gozum</h1>
          <h1 className="animated fadeInDown delay-1s red raleway">I am a front-end web developer.</h1>
          <h1 className="animated fadeInDown delay-2s offwhite raleway">Test</h1>
        
          <h1 className="animated fadeInDown delay-3s red raleway">Test</h1>
          
         
        </div>

      </div>    
    )
  }
}
