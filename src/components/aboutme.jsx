import React, { Component } from 'react'
import './aboutme.css';

export default class AboutMe extends Component {

  render() {
    return (

      <div id="about-me-container">

        {/*<header>
          <div id="about-me-header" className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
          <h2>test</h2>
          </div>
        </header>*/}
        <main>
          <div id="about-me-body">
            <div className="img-wrapper">
              <div className="paulo-image">
                <img src="./paulo.jpeg" className="about-me-image" alt="Paulo Gozum Picture" />
              </div>
            </div>
          </div>

          <div className="about-me-text-container">

            <div className="about-me-text-wrapper">
              <h1 className="about-me-heading-text">Hi, I'm Paulo Gozum. Part-time Computer Geek, Part-time Judoka</h1>

            </div>

            <div className="about-me-text-wrapper">
              <h2 className="about-me-text">I'm an aspiring Front-end Developer that recently moved to Los Angeles. 
               I am currently doing freelance work, and I am actively looking for a Front-end Developer opportunity. 
               I am passionate about technology, continuously research on new technologies, and go back to my 
               previous projects to see how I can improve them. I create to make change.
               Outside of technology, I am into fitness, and I do 
               Judo. I believe that living a healthy lifestyle, incorporating discipline into your lifestyle 
               helps you excel, and live a happier life.  I go beyond my comfort zone to challenge myself.
              </h2>
            </div>
            <div className="about-me-text-wrapper">
              <h1 className="about-me-heading-text">Why Work with Me?</h1>
            </div>
            <div className="about-me-text-wrapper">
              <h2 className="about-me-text">As a Management Information Systems graduate with a passion for building user interfaces,
                I seek to bridge the gap between Management and Information Technology. I believe that IT is
                meant to align with business objectives in order to support a firm's goals and strategies. This is why technology is
                meant to enable organizations through the use of Information Technology. As a Front-end developer, 
                I strive to create intuitive and functional web applications
                that promotes a company's business objectives in order to maximize the company's growth.</h2>
            </div>
          </div>
          <div id="skills-container">
            <div className="skills-heading-wrapper">
              <h1 className="skills-heading-text">What I Use</h1>
            </div>
            <div className="skills-heading-wrapper flex-end">
              <h2 className="skills-proficiency-text">Skills are color-coded by level of knowledge: <span className="green">Learning</span> / 
                <span className="offwhite"> Working</span> / <span className="red">Advanced</span></h2>
            </div>

            <div class="skills-wrapper">
              <h1 className="skills-heading-text">Web Design</h1>
            </div>

            <div class="skills-main-container border">
              <div className="skills-main-wrapper border">
                <h2 className="skills-text">Figma</h2>
                <h2 className="skills-text">Sketch</h2>
                <h2 className="skills-text">Photoshop</h2>
              </div>
              <div class="skills-wrapper">
                <h1 className="skills-heading-text">Web Technologies</h1>
              </div>
              <div className="skills-main-wrapper border">
                <h2 className="skills-text">React.js</h2>
                <h2 className="skills-text"><span className="red">HTML5</span></h2>
                <h2 className="skills-text"><span className="red">CSS3</span></h2>
                <h2 className="skills-text"><span className="red">Bootstrap</span></h2>
                <h2 className="skills-text">SASS (SCSS)</h2>
                <h2 className="skills-text">JavaScript</h2>
                <h2 className="skills-text">Handlebars.js</h2>
                <h2 className="skills-text">Ruby-on-Rails</h2>
                <h2 className="skills-text">MySQL</h2>
                <h2 className="skills-text">MongoDB</h2>
                <h2 className="skills-text"><span className="green">PHP</span></h2>
                <h2 className="skills-text">C#/C++</h2>
                <h2 className="skills-text"><span className="green">Python</span></h2>
             </div>
              <div class="skills-wrapper">
                <h1 className="skills-heading-text">Software Development/ <br/>Deployment Tools</h1>
              </div>

              <div className="skills-main-wrapper border">
              </div>
               <h2 className="skills-text">Git (version control tools)</h2>
               <h2 className="skills-text">Jira</h2>
               <h2 className="skills-text">Mocha</h2>
               <h2 className="skills-text">NPM</h2>
               <h2 className="skills-text"><span className="green">AWS</span></h2>
          
                
            </div>
          </div>
        </main>
      </div>

    )
  }

}
