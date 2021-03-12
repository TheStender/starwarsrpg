import React, { Component } from "react";
import Session3 from './sessionComponents/session3';
 
class FutureSessions extends Component {

  render() {
    return (
      <div>
        <h2>Future Session Info</h2>
        <br />
        <p>Information for upcoming sessions</p>
        <br />
        <p>------------------------------------------------------------------------------------------</p>
        <Session3 />
        <p>------------------------------------------------------------------------------------------</p>
      </div>
    );
  }
}
 
export default FutureSessions;