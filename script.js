'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//function for the .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//function for the .number
const displayNumber = function (number) {
  document.querySelector('.number').style.width = number;
};

//Event button again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayMessage('Start guessing...');
  displayNumber('15rem');
});

//Event button chech
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when the player is no imput
  if (!guess) {
    displayMessage('No Number ⚠');

    //when the player win
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage('Correct Number 🎉');
    displayNumber('40rem');
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the player wrong the number
  } else if (guess > secretNumber) {
    displayMessage('This number is too high so 👇🏽');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    displayMessage('This number is lower so ☝🏽');
    score--;
    document.querySelector('.score').textContent = score;
  }

  //when the score arrive to 00
  if (score === 0) displayMessage('GAME OVER 💀');
});
