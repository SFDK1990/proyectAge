'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 22;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when the player is no imput
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⚠';

    //when the player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the player wrong the number
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      'This number is too high so 👇🏽';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      'This number is lower so ☝🏽';
    score--;
    document.querySelector('.score').textContent = score;
  }

  //when the score arrive to 00
  if (score === 0)
    document.querySelector('.message').textContent = 'GAME OVER 💀';
});
