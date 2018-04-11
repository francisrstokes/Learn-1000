const words = require('../data/dutch-english');
const {choose} = require('../util');
const twoWayQuestions = require('./two-way-questions');
const chalk = require('chalk');

module.exports = async (setRange) => {
  const qSet = words.slice(...setRange);
  const SET_SIZE = qSet.length;
  let score = 0;

  for (let i = 0; i < qSet.length; i++) {
    const qProm = choose(twoWayQuestions);
    const gotQ = await qProm({
      set: qSet,
      score: [score, SET_SIZE],
      questionCounter: i+1,
      wordSelectionFn: (a) => a[i]
    });
    if (gotQ) score++;
  }

  const scorePercent = ((score/SET_SIZE) * 100).toFixed(1);
  console.log(chalk.bold(`Final score: ${score}/${SET_SIZE} (${scorePercent}%)`));
};