const {capitalize} = require('../util');

const fmtQuestionCounter = (qc) => typeof qc === 'number'
  ? `(${qc}) `
  : '';

const fmtScore = (score) => {
  const scorePercent = (((score[0]/score[1])*100) || 0 ).toFixed(1);
  return `Score: ${score.join('/')} (${scorePercent}%)`
};

module.exports = (counter, score, fl, tl, qWord) => {
  const cs = fmtQuestionCounter(counter);
  const ss = fmtScore(score);
  const cfl = capitalize(fl);
  const ctl = capitalize(tl);
  return `${cs}${ss}\n[${cfl} -> ${ctl}] ${qWord}`;
};
