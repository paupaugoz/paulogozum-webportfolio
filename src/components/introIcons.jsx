import React, { Component } from 'react'
import './introduction.css'


export default class IntroIcons extends Component {

  
    
  render() {
    return (
      <div>
        {/* Start of header */}
       <div className="flex">
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
    )
  }
}






