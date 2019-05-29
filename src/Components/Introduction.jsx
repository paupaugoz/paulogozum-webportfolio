import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';
import artboard from './whitelogo.png';



export default class Introduction extends Component {
  render () {
    return (
      <div id="introduction" className="intro-wrapper">

        <div className="image-container">
          <img src="./whitelogo.png" className="animated fadeInDown img" alt="Logo" />
        </div>

        <div className="wrapper">

          <div className="flex-wrapper ">

            <h1 className="animated fadeInDownBig offwhite test">Hi I'm Gozum</h1>
            <h1 className="animated fadeInDown delay-1s red raleway">I am a front-end web developer.</h1>
            <h1 className="animated fadeInDown delay-2s offwhite raleway">Ad Majorem Dei Gloriam</h1>
            <h1 className="animated fadeInDown delay-3s red raleway">Magis</h1>
          </div>

        </div>

      </div>
    )
  }
}
