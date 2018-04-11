const words = require('../data/dutch-english');
const {choose} = require('../util');
const twoWayQuestions = require('./two-way-questions');

const setMode = async (setRange) => {
  const SET_SIZE = setRange[1];
  const qSet = words.slice(...setRange);
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
};