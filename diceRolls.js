'use strict';

// const diceRoll = require('dice-rool');
const savediceroll = require('savediceroll');

function diceRoll1() {
    let slag = savediceroll.getRolls();
    return savediceroll.addRoll(), slag;
}


function diceRoll2() {
  savediceroll.roll2();
}

function diceRoll3() {
  savediceroll.roll3();
  savediceroll.addRoll();
}

module.exports = { diceRoll1, diceRoll2, diceRoll3 };