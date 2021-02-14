import React, { Component } from "react";
 
class SessionInfo extends Component {

  render() {
    return (
      <div>
        <h2>Session Info</h2>
        <br />
        <p>Here you will find information on sessions, both before and after the game</p>
        <br />
        <p>------------------------------------------------------------------------------------------</p>
        <h4>Session 0</h4>
        <h6>Thursday, February 18th at 5:30pm</h6>
        <br />
        <p>Overview</p>
        <ul>
          <li>Character Creation Overview</li>
          <li>Game Overview</li>
          <li>Rules Overview and Demo</li>
          <li>Finish Character Creation</li>
        </ul>
        <p>------------------------------------------------------------------------------------------</p>
      </div>
    );
  }
}
 
export default SessionInfo;