import React, { Component } from "react";
import creation1 from '../images/creation1.JPG';
 
class CharacterCreation extends Component {

  render() {
    return (
      <div>
        <h2>Character Creation</h2>
        <br />
        <p>Here I will go through the process of creating a character, my example will be a Human Smuggler with the Gunslinger Specialization</p>
        <br />
        <h4>Step 1 - Choose a species</h4>
        <p>I choose human. The base characteristics are 2 for all. They receive 110 XP to start with.</p>
        <img src={creation1} />
        <br />
        <h4>Step 2 - Choose a career</h4>
        <p>I choose a Smuggler. A list of all careers can be found <a href="https://star-wars-rpg-ffg.fandom.com/wiki/Category:Careers">here</a></p>
        <br />
        <h4>Step 3 - Choose a specialization</h4>
        <p>I choose a Gunslinger since I want to shoot first and ask questions never.</p>
      </div>
    );
  }
}
 
export default CharacterCreation;