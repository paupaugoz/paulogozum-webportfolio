import React, { Component } from 'react'
import './introduction.css'
import { AnimatedText }  from './AnimatedText';



export default class Projects extends Component {

  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      var header = document.getElementById("header");
      var sticky = header.offsetTop;
      const isTop = window.scrollY < 1170;
      if (isTop !== true) {
        this.setState({ scrolled: true});
      } else {
        this.setState({ scrolled: false});
      }
      console.log(window.scrollY);
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
    
  render() {
    return (
      <div id="intro-container">
        {/* Start of header */}

        <header>
          <div className="animated fadeIn">
            <div id="header" className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
              
              <div id="links-container">

                <div className="icon-container animated fadeIn slower ">
                  <div className="home-wrapper">
                  <a href="#main-container"><span className="fas fa-home"></span></a>
                  </div>
                  <div className="name-header-wrapper">
                  


                  <h3 className="name-header-text">Paulo Gozum</h3>
                  </div>


                  
                  <div className="icon-wrapper">
                    <a title="Designed by [https://fontawesome.com/icons/address-book?style=solid] from www.fontawesome.com"
                      href="mailto:paugozum1@gmail.com?Subject=Job%20Inquiry" target="_top">
                      <span className="fas fa-address-book"></span></a>
                  </div>

                  <div className="icon-wrapper">
                    <a title="Designed by [https://fontawesome.com/icons/file-download?style=solid] from www.fontawesome.com"
                      href="https://docs.google.com/document/d/1KHecB6J9OXhenj5G5wcEUTa9-koTEjM9zLU0ZhfdTRk/export?format=pdf">
                      <span className="fas fa-file-download"></span></a>
                  </div>

                  <div className="icon-wrapper">
                    <a alt="Flowers in Chania"href="https://www.linkedin.com/in/jan-paulo-gozum-b563a5172/" target="_blank">
                      <span className="fab fa-linkedin"></span></a>
                  </div>

                  <div className="icon-wrapper">
                    <a href="https://github.com/paupaugoz" target="_blank"><span className="fab fa-github-square"></span></a>
                  </div>

                  <div className="icon-wrapper">
                    <a href="https://www.facebook.com/paulo.gozum.5" target="_blank"><span className="fab fa-facebook-square"></span></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End of header */}

        {/* Start of main body */}
        <main>

          <div id="main-container">

            <div className="image-container">

              <img src="./whitelogo.png" className="animated fadeIn slowest img" alt="Logo" />

            </div>
            <div className="animated fadeIn slow hero-container">
              <AnimatedText id="name-header" >
              Paulo Codes
              </AnimatedText>

              <div class="test">

                <h2 id="first-header" className="animated fadeInDown delay-1s offwhite heading">I'm a <span id="span-font" className="red">front end web developer </span>
                based in Southern California</h2>
                <h2 id="mid-header" className="animated fadeInDown delay-2s offwhite heading">Turning your dream into a reality by creating
                <span id="span-font" class="red"> elegant and</span></h2>
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
              <a href="#about-me-container"><div className="animated fadeIn arrow"></div></a>
            </div>
          </div>
        </footer>
        {/* End of footer */}

      </div>
    )
  }
}
