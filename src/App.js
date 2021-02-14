import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './components/Home';
import Resources from './components/Resources';
import SessionInfo from './components/SessionInfo';
import CharacterCreation from './components/CharacterCreation';
import RulesExample from './components/RulesExample';
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="yellowText">Star Wars Episode III.V RPG</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/sessionInfo">Session Info</NavLink></li>
            <li><NavLink to="/charactercreation">Character Creation</NavLink></li>
            <li><NavLink to="/rulesexample">Gameplay Example</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/resources" component={Resources}/>
             <Route path="/sessionInfo" component={SessionInfo}/>
             <Route path="/rulesexample" component={RulesExample} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;