import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="intro-wrapper">
        <div id="header"></div>
        <div id="main-wrapper">
          <div className="image-container">
            <img src="./blacklogo.png" className=" fadeInDown img" alt="Logo" />
          </div>
          <h1 id="name-header" className=" fadeInDownBig red">Code That Works</h1>
          <h2 className=" fadeInDown delay-1s black ">Hi I'm Gozum</h2>
          <h3 className=" fadeInDown delay-2s black ">I'm a <span className="red">front end web developer </span>
            based in Southern California</h3>
          <h3 id="projects-header" className=" fadeInDown delay-3s black ">My goal is to
            <span className="red"> align technology </span> with <span className="red">business
            objectives</span></h3>
        </div>
        <div id="footer"><h1 className="black"></h1></div>

      </div>

    )
  }
}
