const words = require('../data/dutch-english');
const inquirer = require('inquirer');
const {choose, capitalize} = require('../util');

module.exports = (fromLanguage, toLanguage) =>
  async ({wordSelectionFn = choose, set = words, score = [0, 0], questionCounter = null}) => {
    const pair = wordSelectionFn(set);
    const qWord = pair[fromLanguage];
    const aWord = pair[toLanguage];

    const counterStr = typeof questionCounter === 'number'
      ? `(${questionCounter}) `
      : '';
    const scoreStr = `Score: ${score.join('/')}`;

    const question = `${counterStr}${scoreStr}\n[${capitalize(fromLanguage)} -> ${capitalize(toLanguage)}] ${qWord}`;
    const res = await inquirer.prompt([{
      type: 'input',
      message: question,
      name: 'res'
    }]).then(answers => answers.res);

    if (res.trim() === aWord) {
      console.log(`✅  Correct! ${qWord} in ${capitalize(toLanguage)} is ${aWord}`);
      return true;
    } else {
      console.log(`❌  Incorrect! ${qWord} in ${capitalize(toLanguage)} is ${aWord}`);
      return false;
    }
  };
