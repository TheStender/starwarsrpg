import React, { Component } from "react";
import Session1Video from '../videos/session1intro.webm';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Players - Updated February 18th, 2021</h2>
        <br />
        <p>This will be a site for you to utilize for our Star Wars RPG</p>
        <p>If anything is broken please let me know and I will get it fixed.</p>
        <br />
        <p>Session 1 will be on Thursday, February 25th, at 5:30pm</p>
        <br />
        <h3 className="yellowText">Session 1 Intro Video</h3>
        <video src={Session1Video} width="600" height="300" controls="controls" />
       </div>
    );
  }
}
 
export default Home;