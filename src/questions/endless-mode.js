const {choose} = require('../util');
const twoWayQuestions = require('./two-way-questions');

module.exports = async () => {
  let qCount = 0;
  let score = 0;
  while (true) {
    const qProm = choose(twoWayQuestions);
    const gotQ = await qProm({
      score: [score, qCount++]
    });
    if (gotQ) score++;
  }
};