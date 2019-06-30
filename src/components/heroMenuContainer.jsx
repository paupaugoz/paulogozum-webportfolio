import React, { Component } from 'react'
import { AnimatedText }  from './AnimatedText';
import AboutMe from './aboutme';
import './aboutme.css'
import MenuButton from './MenuButton';
import Menu from './Menu';
import Introduction from './introduction';
import './introduction.css';

export default class HeroMenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

handleMouseDown(e) {
	this.toggleMenu();
	console.log("clicked");
	e.stopPropagation();
}

toggleMenu() {
	this.setState({
		visible:!this.state.visible
	});
}

  render() {
    return (
      <div id="hero-menu-container">
        <Introduction />
        <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      </div>

    )
  }
}
