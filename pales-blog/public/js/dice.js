const title = document.querySelector("h1");
const round = document.querySelector("h2");
const pRound = document.querySelector(".pround");
const cRound = document.querySelector(".cround");
const pScore = document.querySelector(".pscore");
const cScore = document.querySelector(".cscore");
let score1 = 0, score2 = 0, tRound = 0, pWin = 0, cWin = 0;


function rollDice() {
  const dice = [...document.querySelectorAll(".dice-list")];
  const dice1 = document.getElementById("dice-1");
  const dice2 = document.getElementById("dice-2");
  dice.forEach(dice => {
    toggleClasses(dice);
    //dice.dataset.roll = getRandomNumber(1, 6);
  });
  dice1.dataset.roll = getRandomNumber(1, 6);
  dice2.dataset.roll = getRandomNumber(1, 6);
  tRound++;
  score1 += parseInt(dice1.dataset.roll);
  score2 += parseInt(dice2.dataset.roll);

  let hasil;
  if (dice1.dataset.roll > dice2.dataset.roll ) {
      hasil = "Player Wins!";
      pWin++;
  }
  else if (dice1.dataset.roll < dice2.dataset.roll ) {
      hasil = "Computer Wins!";
      cWin++;
  }
  else {
      hasil = "Draw!";
  }

  setTimeout(function() {
    title.innerText = hasil;
    round.innerText = `Total Round: ${tRound}`;
    pRound.innerText = `Total Win (Round): ${pWin}`;
    cRound.innerText = `Total Win (Round): ${cWin}`;
    pScore.innerText = `Cummulative Score: ${score1}`;
    cScore.innerText = `Cummulative Score: ${score2}`;
  }, 5100);
}

function toggleClasses(dice) {
  dice.classList.toggle("odd-roll");
  dice.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const roll = document.getElementById("roll-button");
roll.addEventListener("click", rollDice);
