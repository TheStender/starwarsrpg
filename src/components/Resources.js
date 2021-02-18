import React, { Component } from "react";
 
class Resources extends Component {
  render() {
    return (
      <div>
        <h2>Resources</h2>
        <br />
        <p>Here you will find various resources to use during the game</p>

        <br />
        <p><a href="http://www.legendsofthegalaxy.com/Oggdude/">Oggdude</a> - Here you can download a tool to help you build your character, it's about 137MB though. I will be using this to show how to build a character. It also has good info on a lot of other stuff including gear and ships</p>
        <br />
        <p><a href="https://images-cdn.fantasyflightgames.com/ffg_content/StarWarsRPG/edge-of-the-empire/support/edge-of-the-empire-character-sheet.pdf">Character Sheet</a> - Link to a PDF Character Sheet</p>
        <br />
        <p><a href="https://rpg-dice-roller.herokuapp.com/star_wars">Dice Roller</a> - A dice roller you can use</p>
      </div>
    );
  }
}
 
export default Resources;