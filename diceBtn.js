// diceBtn.js
// const diceRolls = require('./diceRolls'); // Importera lokal modul
import {diceRoll1, diceRoll2, diceRoll3} from './diceRolls.js';
// import diceRoll1 from './diceRoll1.js';

export default function rollDiceBtn() {
  const mainCon = document.getElementById('main-Con');
  const dice1btn = document.createElement('button');
  // const dice2btn = document.createElement('button');
  // const dice3btn = document.createElement('button');
  dice1btn.id = 'dice-1-Btn';
  // dice2btn.id = 'dice-2-Btn';
  // dice3btn.id = 'dice-3-Btn';
  dice1btn.innerText = 'Slå 1 tärning';
  // dice2btn.innerText = 'Slå 2 tärningar';
  // dice3btn.innerText = 'Slå 3 tärningar';

  mainCon.append(dice1btn);
  const contResult = document.createElement('div');

  dice1btn.addEventListener('click', () => {
    const result = diceRoll1();
    contResult.id = 'cont-result';
    contResult.innerText = '';
    contResult.innerText = result;
    mainCon.append(contResult);
  });
  // dice2btn.addEventListener('click', diceRoll2());
  // dice3btn.addEventListener('click', diceRoll3());
}


