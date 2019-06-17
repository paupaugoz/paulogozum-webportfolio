import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';

export default class Projects extends Component {
  render() {
    return (
      <div id="intro-wrapper">
        <div id="header">
        <div class="animated-container">
        <AnimatedText >
        PAULO GOZUM
      </AnimatedText>
        </div>
        <div class="animated fadeInDown icon-container">
          <div className="icon-wrapper">
            <a href="https://www.linkedin.com/in/jan-paulo-gozum-b563a5172/"><span class="fab fa-linkedin"></span></a>
          </div>
          <div className="icon-wrapper">
            <a href="https://github.com/paupaugoz"><span class="fab fa-github-square"></span></a>
          </div>
          {/* <div className="icon-wrapper">
            <a href="https://github.com/paupaugoz"><h1>Contact Me</h1></a>
          </div>*/}

        </div>
        

        
        </div>
       
        <div id="main-wrapper">
          <div className="image-container">
            <img src="./blacklogo.png" className="animated fadeInDown img" alt="Logo" />
          </div>
          <h1 id="name-header" className="animated fadeInDownBig red">Hi I'm Gozum</h1>
          <h2 className="animated fadeInDown delay-1s black ">I'm a <span className="red">front end web developer </span>
            based in Southern California</h2>
          <h2 id="last-header" className="animated fadeInDown delay-2s black ">My goal is to
            <span className="red"> align technology </span> with <span className="red">business
            objectives</span></h2>
        </div>
        <div id="footer">
        <div class="arrow-container">
        <a href="#projects"><div className="animated fadeIn arrow"></div></a></div>      
      </div>
      </div>

    )
  }
}
