const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("error")
  }
};

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);
  switch(num){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Putey wins :-<';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'Putey wins :-<';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Putey wins :-<';
    } else {
      return 'You win!';
    }
  }

};
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`User choice is: ${userChoice} and 'puter choice is: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();