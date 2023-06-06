'use strict';

export default function rollDiceBtn () {

    const mainCon = document.getElementById('main-Con')
    const dice1btn = document.createElement('button')
    const dice2btn = document.createElement('button')
    const dice3btn = document.createElement('button')
    dice1btn.id = 'dice-1-Btn'
    dice2btn.id = 'dice-2-Btn'
    dice3btn.id = 'dice-3-Btn'
    dice1btn.innerText = 'Slå 1 tärning'
    dice2btn.innerText = 'Slå 2 tärning'
    dice3btn.innerText = 'Slå 3 tärning'

    mainCon.append(dice1btn, dice2btn, dice3btn)

    dice1btn.addEventListener('click', () => {

    });
    dice2btn.addEventListener('click', () => {

    });
    dice3btn.addEventListener('click', () => {

    });
}
