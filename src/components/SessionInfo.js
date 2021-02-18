import React, { Component } from "react";
import Session0 from './sessionComponents/session0';
import Session1 from './sessionComponents/session1';
 
class SessionInfo extends Component {

  render() {
    return (
      <div>
        <h2>Session Info</h2>
        <br />
        <p>Here you will find information on sessions, both before and after the game</p>
        <br />
        <p>------------------------------------------------------------------------------------------</p>
        <Session0 />
        <p>------------------------------------------------------------------------------------------</p>
        <Session1 />
      </div>
    );
  }
}
 
export default SessionInfo;