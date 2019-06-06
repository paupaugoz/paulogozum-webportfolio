import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';
import artboard from './whitelogo.png';



export default class Introduction extends Component {
  render () {
    return (
      <div id="introduction" className="intro-wrapper">
      
         {/*} <div className="image-container">
          <img src="./whitelogo.png" className="animated fadeInDown img" alt="Logo" />
        </div>
       */}
        <div id="header">
        </div>
        <div className="wrapper">

          <div className="flex-wrapper">

            <div className="image-container">
              <img src="./blacklogo.png" className="animated fadeInDown img" alt="Logo" />
            </div>
            <h1 id="name-header" className="animated fadeInDownBig heading red">Code That Works</h1>
            <h2 className="animated fadeInDown delay-1s black ">Hi I'm Gozum</h2>
            <h3 className="animated fadeInDown delay-2s black ">I'm a <span className="red">front end web developer </span>
            based in Southern California</h3>
            <h3 id="last-header" className="animated fadeInDown delay-3s black ">My goal is to 
            <span className="red"> align technology </span> with <span className="red">business
            objectives</span></h3>


                 
          </div>


        </div>
        <div id="footer">

        </div>
      </div>

    )
  }
}
