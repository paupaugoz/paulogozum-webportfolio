import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';

export default class Projects extends Component {
  render() {
    return (
      <div id="intro-wrapper">
      <div class="animated fadeIn">
        <div id="header">
        <div class="logo-header"><div className="image-container">
            <img src="./blacklogo.png" className="animated fadeIn slower img" alt="Logo" />
          </div></div>
       
        

        
        </div>
        </div>
       
        <div id="main-container">
        <div id="links-container">
          
           <div className="url-container animated fadeIn slower">
           <div className="url-wrapper blue"><a class="blue" href="#projects"><h2>Contact</h2></a></div>
           <div className="url-wrapper"><a class="blue" href="./resume.pdf" download><h2>Resume</h2></a></div>
           
           </div>

           <div class="animated fadeIn slower icon-container">
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
       
          <AnimatedText id="name-header test" >
        Hi I'm Gozum
      </AnimatedText>
          <div className="intro-text-container">
          <h2 className="animated fadeInDown delay-1s black ">I'm a <span className="red">front end web developer </span>
            based in Southern California</h2>
          <h2 id="last-header" className="animated fadeInDown delay-2s black ">My goal is to
            <span className="red"> align technology </span> with <span className="red">business
            objectives</span></h2>
        </div>
        </div>
        <div id="footer">
        <div class="arrow-container">
        <a href="#projects"><div className="animated fadeIn arrow"></div></a>
        </div>      
      </div>
      </div>

    )
  }
}
