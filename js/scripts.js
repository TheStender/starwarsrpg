// Define the selected dice object to store the quantities of each type of dice
let selectedDice = {};

function selectDice(diceType) {
  if (selectedDice[diceType]) {
    selectedDice[diceType]++;
  } else {
    selectedDice[diceType] = 1;
  }
  updateDiceTotals();
}

function updateDiceTotals() {
  for (const diceType in selectedDice) {
    const totalElement = document.getElementById(diceType + "-total");
    if (totalElement) {
      totalElement.innerText = selectedDice[diceType];
    }
  }
}

// Function to roll the ability dice
function rollAbilityDice(quantity) {
  let totalSuccesses = 0;
  let totalAdvantages = 0;

  // Roll the specified quantity of ability dice
  for (let i = 0; i < quantity; i++) {
    // Roll the ability die (an 8-sided die)
    const rollResult = Math.floor(Math.random() * 8) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
        break;
      case 2:
      case 3:
        totalSuccesses++;
        break;
      case 4:
        totalSuccesses += 2;
        break;
      case 5:
      case 6:
        totalAdvantages++;
        break;
      case 7:
        totalSuccesses++;
        totalAdvantages++;
        break;
      case 8:
        totalAdvantages+=2;
        break;
    }
    console.log("Roll of ability dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalSuccesses: totalSuccesses,
    totalAdvantages: totalAdvantages
  };
}

// Function to roll the proficiency dice
function rollProficiencyDice(quantity) {
  let totalSuccesses = 0;
  let totalAdvantages = 0;
  let totalTriumphs = 0;

  // Roll the specified quantity of proficiency dice
  for (let i = 0; i < quantity; i++) {
    // Roll the proficiency die (a 12-sided die)
    const rollResult = Math.floor(Math.random() * 12) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 2:
      case 3:
        totalSuccesses++;
        break;
      case 4:
      case 5:
        totalSuccesses += 2;
        break;
      case 6:
        totalAdvantages++;
        break;
      case 7:
      case 8:
      case 9:
        totalSuccesses++;
        totalAdvantages++;
        break;
      case 10:
      case 11:
        totalAdvantages += 2;
        break;
      case 12:
        totalTriumphs++;
        break;
      default:
        // No successes or advantages gained for other results
        break;
    }
    console.log("Roll of proficiency dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalSuccesses: totalSuccesses,
    totalAdvantages: totalAdvantages,
    totalTriumphs: totalTriumphs
  };
}

// Function to roll the boost dice
function rollBoostDice(quantity) {
  let totalSuccesses = 0;
  let totalAdvantages = 0;

  // Roll the specified quantity of boost dice
  for (let i = 0; i < quantity; i++) {
    // Roll the boost die (an 6-sided die)
    const rollResult = Math.floor(Math.random() * 6) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
      case 2:
        break;
      case 3:
        totalAdvantages += 2;
        break;
      case 4:
        totalAdvantages++;
        break;
      case 5:
        totalSuccesses++;
        totalAdvantages++;
        break;
      case 6:
        totalSuccesses++;
        break;
    }
    console.log("Roll of boost dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalSuccesses: totalSuccesses,
    totalAdvantages: totalAdvantages
  };
}

// Function to roll the difficulty dice
function rollDifficultyDice(quantity) {
  let totalFailures = 0;
  let totalThreats = 0;

  // Roll the specified quantity of difficulty dice
  for (let i = 0; i < quantity; i++) {
    // Roll the boost die (an 8-sided die)
    const rollResult = Math.floor(Math.random() * 8) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
        break;
      case 2:
        totalFailures++;
        break;
      case 3:
        totalFailures += 2;
        break;
      case 4:
      case 5:
      case 6:
        totalThreats++;
        break;
      case 7:
        totalThreats+=2;
        break;
      case 8:
        totalFailures++;
        totalThreats++;
        break;
    }
    console.log("Roll of difficulty dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalFailures: totalFailures,
    totalThreats: totalThreats
  };
}

// Function to roll the challenge dice
function rollChallengeDice(quantity) {
  let totalFailures = 0;
  let totalThreats = 0;
  let totalDespair = 0;

  // Roll the specified quantity of challenge dice
  for (let i = 0; i < quantity; i++) {
    // Roll the challenge die (a 12-sided die)
    const rollResult = Math.floor(Math.random() * 12) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 2:
      case 3:
        totalFailures++;
        break;
      case 4:
      case 5:
        totalFailures += 2;
        break;
      case 6:
      case 7:
        totalThreats++;
        break;
      case 8:
      case 9:
        totalFailures++;
        totalThreats++;
        break;
      case 10:
      case 11:
        totalThreats += 2;
        break;
      case 12:
        totalDespair++;
        break;
      default:
        // No successes or advantages gained for other results
        break;
    }
    console.log("Roll of challenge dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalFailures: totalFailures,
    totalThreats: totalThreats,
    totalDespair: totalDespair
  };
}

// Function to roll the setback dice
function rollSetbackDice(quantity) {
  let totalFailures = 0;
  let totalThreats = 0;

  // Roll the specified quantity of setback dice
  for (let i = 0; i < quantity; i++) {
    // Roll the setback die (an 6-sided die)
    const rollResult = Math.floor(Math.random() * 6) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
      case 2:
        break;
      case 3:
      case 4:
        totalFailures += 2;
        break;
      case 5:
      case 6:
        totalThreats++;
        break;
    }
    console.log("Roll of setback dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object
  return {
    totalFailures: totalFailures,
    totalThreats: totalThreats
  };
}

// Function to roll the force dice
function rollForceDice(quantity) {
  let totalLightSide = 0;
  let totalDarkSide = 0;

  // Roll the specified quantity of force dice
  for (let i = 0; i < quantity; i++) {
    // Roll the force die (a 12-sided die)
    const rollResult = Math.floor(Math.random() * 12) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        totalDarkSide++;
        break;
      case 7:
        totalDarkSide += 2;
        break;
      case 8:
      case 9:
        totalLightSide++;
        break;
      case 10:
      case 11:
      case 12:
        totalLightSide += 2;
        break;
    }
    console.log("Roll of force dice " + (i+1) + " was " + rollResult);
  }

  // Return the result as an object with total light side and dark side points
  return {
    totalLightSide: totalLightSide,
    totalDarkSide: totalDarkSide
  };
}

// Function to roll all selected dice and calculate totals
function rollAllDice() {
  let totalSuccesses = 0;
  let totalAdvantages = 0;
  let totalFailures = 0;
  let totalThreats = 0;
  let totalTriumphs = 0;
  let totalDespair = 0;
  let totalLightSide = 0;
  let totalDarkSide = 0;

  // Iterate over each selected dice type and roll the corresponding dice
  for (const diceType in selectedDice) {
    const quantity = selectedDice[diceType];
    switch (diceType) {
      case 'ability':
        const abilityResult = rollAbilityDice(selectedDice[diceType]);
        totalSuccesses += abilityResult.totalSuccesses;
        totalAdvantages += abilityResult.totalAdvantages;
        break;
      case 'proficiency':
        const proficiencyResult = rollProficiencyDice(selectedDice[diceType]);
        totalSuccesses += proficiencyResult.totalSuccesses;
        totalAdvantages += proficiencyResult.totalAdvantages;
        totalTriumphs += proficiencyResult.totalTriumphs
        break;
      case 'boost':
        const boostResult = rollBoostDice(selectedDice[diceType]);
        totalSuccesses += boostResult.totalSuccesses;
        totalAdvantages += boostResult.totalAdvantages;
        break;
      case 'difficulty':
        const difficultyResult = rollDifficultyDice(quantity);
        totalFailures += difficultyResult.totalFailures;
        totalThreats += difficultyResult.totalThreats;
        break;
      case 'challenge':
        const challengeResult = rollChallengeDice(quantity);
        totalFailures += challengeResult.totalFailures;
        totalThreats += challengeResult.totalThreats;
        totalDespair += challengeResult.totalDespair;
        break;
      case 'setback':
        const setbackResult = rollSetbackDice(quantity);
        totalFailures += setbackResult.totalFailures;
        totalThreats += setbackResult.totalThreats;
        break;
      case 'force':
        const forceResult = rollForceDice(quantity);
        totalLightSide += forceResult.totalLightSide;
        totalDarkSide += forceResult.totalDarkSide;
        break;
    }
  }

  // Calculate net successes and advantages after considering failures and threats
  const netSuccesses = totalSuccesses - totalFailures;
  const netAdvantages = totalAdvantages - totalThreats;
  const netTriumphs = totalTriumphs - totalDespair;

  // Construct the result message based on net successes and advantages
  let resultMessage = "";
  if (netSuccesses > 0) {
    resultMessage += `${netSuccesses} Success${netSuccesses !== 1 ? 'es' : ''}`;
  } else if (netSuccesses < 0) {
    resultMessage += `${Math.abs(netSuccesses)} Failure${Math.abs(netSuccesses) !== 1 ? 's' : ''}`;
  }
  
  if (netAdvantages > 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${netAdvantages} Advantage${netAdvantages !== 1 ? 's' : ''}`;
  } else if (netAdvantages < 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${Math.abs(netAdvantages)} Threat${Math.abs(netAdvantages) !== 1 ? 's' : ''}`;
  }

  if (netTriumphs > 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${netTriumphs} Triumph${netTriumphs !== 1 ? 's' : ''}`;
  } else if (netTriumphs < 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${Math.abs(netTriumphs)} Despair${Math.abs(netTriumphs) !== 1 ? 's' : ''}`;
  }

  if (totalLightSide > 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${totalLightSide} Light Side Point${totalLightSide !== 1 ? 's' : ''}`;
  }

  if (totalDarkSide > 0) {
    resultMessage += `${resultMessage.length > 0 ? ', ' : ''}${totalDarkSide} Dark Side Point${totalDarkSide !== 1 ? 's' : ''}`;
  }

  // Display the result message
  document.getElementById("result").innerText = "Total result: " + resultMessage;
}

// Function to reset the selected dice
function resetDicePool() {
  selectedDice = {};
  // Clear displayed totals for each type of dice
  const diceTotalElements = document.querySelectorAll(".dice-total");
  diceTotalElements.forEach((element) => {
    element.innerText = "0";
  });
  // Clear result message
  document.getElementById("result").innerText = "";
  console.clear();
}

document.addEventListener('DOMContentLoaded', (event) => {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(collapsible => {
      collapsible.addEventListener('click', function() {
          this.classList.toggle('active');
          const content = this.nextElementSibling;
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});

