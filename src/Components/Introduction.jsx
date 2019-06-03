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
      
        <div className="wrapper">

          <div className="flex-wrapper">
            
            <div className="image-container">
              <img src="./blacklogo.png" className="animated fadeInDown img" alt="Logo" />
            </div>
            <h1 id="name-header" className="animated fadeInDownBig heading red">Code For Your Co</h1>
            <h2 className="animated fadeInDown delay-1s black ">Hi I'm Gozum</h2>
            <h2 className="animated fadeInDown delay-2s black ">Front-end Developer based in Sunny Southern California</h2>
            <h2 id="last-header" className="animated fadeInDown delay-3s black ">Magis</h2>
            
            
            </div>

        </div>

      </div>


    )
  }
}
