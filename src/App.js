import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './components/Home';
import Resources from './components/Resources';
import PastSessions from './components/PastSessions';
import FutureSessions from './components/FutureSessions';
import CastOfCharacters from './components/CastOfCharacters';
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="yellowText">Star Wars Episode III.V RPG</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/pastSessions">Past Session Info</NavLink></li>
            <li><NavLink to="/futureSessions">Future Session Info</NavLink></li>
            <li><NavLink to="/castOfCharacters">Characters</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/resources" component={Resources}/>
             <Route path="/pastSessions" component={PastSessions}/>
             <Route path="/futureSessions" component={FutureSessions}/>
             <Route path="/castOfCharacters" component={CastOfCharacters} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;