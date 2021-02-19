import React, { Component } from "react";
import Session0 from './sessionComponents/session0';
 
class PastSessions extends Component {

  render() {
    return (
      <div>
        <h2>Past Session Info</h2>
        <br />
        <p>Information and Recap of previous sessions</p>
        <br />
        <p>------------------------------------------------------------------------------------------</p>
        <Session0 />
        <p>------------------------------------------------------------------------------------------</p>
      </div>
    );
  }
}
 
export default PastSessions;