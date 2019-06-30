import React, { useContext } from 'react';

import {
  Route,
  NavLink,
  Switch,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import './App.css';
import './components/animate.css'
import './components/projects.css';
import './components/divider.css';

import { Introduction } from './components/index.jsx';
import Table from './components/table';
import { AnimatedText }  from './AnimatedText';
import Projects from './components/projects'

import Divider from './components/divider'
import AboutMe from './components/aboutme'
// import Test from './components/test'
const App = () =>  {

   const { location } = useContext(__RouterContext);
  const transitions =useTransition(location, location => location.pathname, {
    from: { opacity: 0,transform: "translate3d(0, -100vh, 0)"},
    enter: { opacity: 1, transform: "translate3d(0,0vh, 0)"},
    leave: { opacity: 0, transform: "translate3d{0,100vh, 0"}
  });
    return (
      <div className="App">
        
        {/*<Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition 
              key={location.key}
              timeout={{enter: 300, exit: 400 }}
              classNames="slide"
            >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
          )} />*/}
          {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Introduction} />
              <Route path="/about" component={AboutMe} />
            </Switch>
          </animated.div>
        ))}

       
      </div>
    );
  
}

export default App;

