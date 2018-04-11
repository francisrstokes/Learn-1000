const words = require('./dutch-english');
const {choose, capitalize} = require('./util');
const inquirer = require('inquirer');

const normalQuestion = (fromLanguage, toLanguage) =>
  async (set = words, score = [0, 0], questionCounter = null) => {
    const pair = choose(set);
    const qWord = pair[fromLanguage];
    const aWord = pair[toLanguage];

    const counterStr = typeof questionCounter === 'Number'
      ? `(${questionCounter.join('/')}) `
      : '';
    const scoreStr = `Score: ${score.join('/')}`;

    const question = `${counterStr}${scoreStr}\n[${capitalize(fromLanguage)} -> ${capitalize(toLanguage)}] ${qWord}`;
    const res = await inquirer.prompt([{
      type: 'input',
      message: question,
      name: 'res'
    }]).then(answers => answers.res);

    if (res.trim() === aWord) {
      console.log(`[✅ ] Correct! ${qWord} in ${capitalize(toLanguage)} is ${aWord}`);
      return true;
    } else {
      console.log(`[❌ ] Incorrect! ${qWord} in ${capitalize(toLanguage)} is ${aWord}`);
      return false;
    }
  };

const endlessSet = [
  normalQuestion('english', 'dutch'),
  normalQuestion('dutch', 'english')
];

const endlessMode = async () => {
  let qCount = 0;
  let score = 0;
  while (true) {
    const qProm = choose(endlessSet);
    const gotQ = await qProm(words, [score, qCount++]);
    if (gotQ) score++;
  }
};

const setMode = async (setRange) => {
  const SET_SIZE = setRange[1];
  const qSet = words.slice(...setRange);
  let score = 0;

  for (let i = 0; i < qSet.length; i++) {
    const qProm = choose(endlessSet);
    const gotQ = await qProm(qSet, [score, SET_SIZE], i+1);
    if (gotQ) score++;
  }
}

module.exports = {
  endless: endlessMode,
  set: setMode
};
