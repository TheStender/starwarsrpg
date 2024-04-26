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
    const rollResult = Math.floor(Math.random() * 8) + 1;

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
    console.log("Roll of prof dice " + (i+1) + " was " + rollResult);
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
    const rollResult = Math.floor(Math.random() * 8) + 1;

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

// Function to roll the setback dice

// Function to roll the force dice

// Function to roll all selected dice and calculate totals
function rollAllDice() {
  let totalSuccesses = 0;
  let totalAdvantages = 0;
  let totalFailures = 0;
  let totalThreats = 0;
  let totalTriumphs = 0;

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
        break;
      case 'setback':
        break;
    }
  }

  // Calculate net successes and advantages after considering failures and threats
  const netSuccesses = totalSuccesses - totalFailures;
  const netAdvantages = totalAdvantages - totalThreats;

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
}
