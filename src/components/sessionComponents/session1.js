import React, { Component } from "react";
import Session1Video from '../../videos/session1intro.webm';
 
class Session1 extends Component {

  render() {
    return (
      <div>
        
        <h4>Session 1</h4>
        <h6>Thursday, March 4th at 5:30pm</h6>
        <br />
        <p>Overview</p>
        <ul>
          <li>Introductory Session</li>
            <ul>
              <li>The four of you were in a catina, with a bartender and a hooded human</li>
              <li>An Imperial Officer and three stormtroopers pushing a prisoner entered the cantina demanding to know who the prisoner was meeting with</li>
              <li>When the bartender objected, the Officer shot him, and then the prisoner, and ordered the stormtroopers to kill everyone</li>
              <li>You successfully fought the Imperials, and escaped the cantina with the hooded human who introduced himself as Flynn</li>
              <li>You stole a YT-2400 from the Hanger, and barely escaped from a pursuing Star Destroyer and four TIE Fighters</li>
              <li>Instead of just dropping Flynn off, you decided to hear his offer of employment</li>
            </ul>
        </ul>
        <p>Intro Video</p>
        <video src={Session1Video} width="600" height="300" controls="controls" />
      </div>
    );
  }
}
 
export default Session1;