import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Players</h2>
        <br />
        <p>This will be a site for you to utilize for our Star Wars RPG</p>
        <p>If anything is broken please let me know and I will get it fixed.</p>

        <p>Session 0 will be on Thursday, February 18th, at 5:30pm</p>
        <p className="textIndent">* In this session we will go over character creation, the basic plot of the game, and a quick rules overview</p>
        <p>The first game session will be on Thursday, February 25th, at 5:30pm</p>
       </div>
    );
  }
}
 
export default Home;