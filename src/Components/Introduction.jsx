import React, { Component } from 'react'
import './introduction.css'
import { AnimatedText }  from './AnimatedText';
import {
  Route,
  NavLink,
  Switch,
  __RouterContext
} from "react-router-dom";
import Header from './header';
import IntroIcons from './introIcons';

export default class Introduction extends Component {

  
    
  render() {
    return (
      <div id="intro-container">
        {/* Start of header */}
       <Header>
         <IntroIcons />
       </Header>
        
        {/* End of header */}

        {/* Start of main body */}
        <main>

          <div id="main-container">

            <div className="image-container animated fadeIn slower">

              <img src="./whitelogo.png" className=" slowest img" alt="Logo" />

            </div>
            <div className="animated fadeIn slower hero-container">
              <AnimatedText id="name-header" >
              Paulo Codes
              </AnimatedText>

              <div className="test">

                <h2 id="first-header" className="animated fadeInDown delay-1s offwhite heading">I'm a <span id="span-font" className="red">front end web developer </span>
                based in Southern California</h2>
                <h2 id="mid-header" className="animated fadeInDown delay-2s offwhite heading">Turning your dream into a reality by creating
                <span id="span-font" className="red"> elegant and</span></h2>
                <h2 id="last-header" className="animated fadeInDown delay-3s red">functional user interfaces for web applications </h2>
              </div>
            </div>
          </div>

        </main>

        {/* End of main body */}

        {/* Start of footer */}
        <footer>
          <div id="footer">

            <div className="arrow-container">
            
            <NavLink exact to="/about"><a href="#about-me-container"><div className="animated fadeIn arrow">
            </div></a>
            </NavLink>
              
            </div>
          </div>
        </footer>
        {/* End of footer */}

      </div>
    )
  }
}
