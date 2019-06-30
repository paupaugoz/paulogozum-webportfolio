import React, { Component } from 'react'
import './introduction.css'
import {
  Route,
  NavLink,
  Switch,
  __RouterContext
} from "react-router-dom";


export default class Header extends Component {

  
    
  render() {
    return (
      <div>
        {/* Start of header */}
   
        <header>
          <div className="animated fadeIn delay-1s">
            <div id="header">

              <div id="links-container">

                <div className="icon-container animated fadeIn delay-1s slower ">

                  <div className="home-wrapper">
                    <NavLink exact to="/" activeClassName="active"><span className="fas fa-home"></span>
                    </NavLink>
                  </div>

                  <div className="name-header-wrapper">     
                    <h3 className="name-header-text">Paulo Gozum</h3>
                  </div>

                  {this.props.children}

                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
