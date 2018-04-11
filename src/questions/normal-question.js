const chalk = require('chalk');
const words = require('../data/dutch-english');
const formatQuestion = require('./format-question');
const {choose, capitalize, input} = require('../util');

module.exports = (fromLanguage, toLanguage) =>
  async ({wordSelectionFn = choose, set = words, score = [0, 0], questionCounter = null}) => {
    const pair = wordSelectionFn(set);
    const questionWord = pair[fromLanguage];
    const answerWords = words
      .filter(wp => wp[fromLanguage] === questionWord)
      .map(wp => wp[toLanguage]);

    const question = formatQuestion(questionCounter, score, fromLanguage, toLanguage, questionWord);
    const res = await input(question);

    const wordIsStr = answerWords.length === 1
      ? chalk.bold(`"${questionWord}" in ${capitalize(toLanguage)} is "${answerWords[0]}"`)
      : chalk.bold(`"${questionWord}" in ${capitalize(toLanguage)} can be: ${answerWords.map(w => `"${w}"`).join(', ')}`);

    if (answerWords.includes(res.trim())) {
      console.log(`✅  Correct!\n${wordIsStr}\n`);
      return true;
    }

    console.log(`❌  Incorrect!\n${wordIsStr}\n`);
    return false;
  };
