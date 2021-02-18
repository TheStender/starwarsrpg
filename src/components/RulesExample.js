import React, { Component } from "react";
import DiceExample from '../images/diceexample.JPG'
 
class RulesExample extends Component {

  render() {
    return (
      <div>
        <h2>Rules Example</h2>
        <br />
        <h4>Computer Hacking Time</h4>
        <p>You are in a hallway, under fire, and need to hack a computer console to open the next door.</p>
        <p>In my previous Smuggler Gunslinger Character example, I have 1 green die, and 1 yellow die for my Computer Ability</p>
        <p>The GM decides it is an easy check, so you add 1 purple die</p>
        <p>However, since you are under fire, the GM also says to use 1 black setback die</p>
        <p>You roll your dice, and get the following result</p>
        <img src={DiceExample} />
        <p>So you have 2 successes, 1 advantage, and 2 threat</p>
        <p>The main thing that matters is success vs. failure. Since you rolled more successes than failures, you successfully hack the computer and open the door</p>
        <p>However, since you did roll 2 threats, the GM could use that to cause something else to happen. Such as you hacked it too quickly and now can not shut it behind you</p>
      </div>
    );
  }
}
 
export default RulesExample;