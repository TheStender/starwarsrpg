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

function rollSelectedDice() {
  let total = 0;
  for (const diceType in selectedDice) {
    const quantity = selectedDice[diceType];
    const rollResult = rollDice(diceType, quantity);
    total = rollResult;
  }
  document.getElementById("result").innerText = "Total sum: " + total;
}

function rollDice(diceType, quantity) {
  let successes = 0;
  let advantages = 0;

  for (let i = 0; i < quantity; i++) {
    // Roll the dice
    const rollResult = Math.floor(Math.random() * 8) + 1;

    // Determine the result based on the roll
    switch (rollResult) {
      case 1:
        successes++;
        break;
      case 2:
        successes++;
        break;
      case 3:
        successes++;
        advantages++;
        break;
      case 4:
        advantages++;
        break;
      case 5:
        successes += 2;
        break;
      case 6:
        successes++;
        advantages += 2;
        break;
      case 7:
        advantages += 2;
        break;
      case 8:
        advantages += 3;
        break;
    }
  }

  // Construct the result message without leading zero for successes
  let resultMessage = `${successes} Success${successes > 1 ? 'es' : ''}`;
  resultMessage += `, ${advantages} Advantage${advantages !== 1 ? 's' : ''}`;

  return resultMessage;
}




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
